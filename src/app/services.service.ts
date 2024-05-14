import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  userDetailsSubmit(data:any){
    console.log("Data come in service:",data);
  return this.httpClient.post("http://localhost:4500/user",data);
  }

  checkUserDetails(data:any){
    return this.httpClient.post("http://localhost:4500/check",data);
  }

  addValue(data:any){
 return this.httpClient.post("  https://93iylyy9nj.execute-api.ap-south-1.amazonaws.com/dev/joke",data);
  }
  
  // https://irvyl961eh.execute-api.us-east-1.amazonaws.com/text/user/addnum
  // https://f5i4447d92.execute-api.us-west-2.amazonaws.com/getsum

  // gettext(){
  //   return  this.httpClient.get("https://irvyl961eh.execute-api.us-east-1.amazonaws.com/");
  // } 

  // getSum(){
  //   return  this.httpClient.get(" https://irvyl961eh.execute-api.us-east-1.amazonaws.com/text");

  // }
  // getUser(){
  
  //   const accessToken = 'tabish@321';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${accessToken}`
      
  //   });

  //   return  this.httpClient.get(" https://47mr35nj7h.execute-api.ap-south-1.amazonaws.com/dev/text/user",{headers});

  // }

  addSum(){
    const accessToken = 'tabish@321';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
        
      });
    return this.httpClient.get("https://g690chifg2.execute-api.ap-south-1.amazonaws.com/dev/addnumber",{headers});
  }

  invoke(){
    return this.httpClient.get('  https://jip87skl9d.execute-api.ap-south-1.amazonaws.com/aa');
  }
  

  // addUser(data:any){
  // return this.httpClient.post('https://sxb8hkp9fj.execute-api.us-west-2.amazonaws.com/user',data)
  // }

  textchange(data:any){  
    const accessToken = 'tabish@321';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
        
      });
  return this.httpClient.post("https://g690chifg2.execute-api.ap-south-1.amazonaws.com/dev/textchange",data,{headers})
  }


  getImageUrl(imagePath:any){
    console.log("Data come in console:",imagePath);
   return this.httpClient.get(`https://g690chifg2.execute-api.ap-south-1.amazonaws.com/dev/imageupload?fileKey=${imagePath}`)

  }



  upload(url:any,imagePath:any){
    return this.httpClient.post(url,imagePath);
  }

}
