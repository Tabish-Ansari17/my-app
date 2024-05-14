import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  text:string=" ";
  userForm!:FormGroup
  myForm!: FormGroup;
  imageForm!: FormGroup;

  token:string='valid_tokenhibjk';

  constructor(private service: ServicesService) {}

  ngOnInit() {
    
        
    this.imageForm = new FormGroup({
      image: new FormControl('', [Validators.required,]),
    });
    
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

      this.myForm = new FormGroup({
        // Define your form controls with validation here
        num1: new FormControl('', Validators.required),
        num2: new FormControl('', Validators.required),

        
    });
    // this.getText();
    // this.getSum();
    // this.getUser();
    this.sumNum();
     this.invokeLamda();

  }

  onSubmit() {

    console.log("the form value is :",this.myForm.value);
    this.service.addValue(this.myForm.value).subscribe((res:any)=>{
      console.log("Sum value is coming:",res);
    })
    
  }
  textformat(){
    this.service.textchange(this.text).subscribe((res:any)=>{
      console.log("Text changeing :",res.text);
      this.text=res.text;
    })
  }

  async imageSubmit(){
    let url;
    let imagePath;
    let imageUrl=this.imageForm.value.image;
        const img = this.getFileNameFromPath(imageUrl);
        await this.service.getImageUrl(img).subscribe((res:any)=>{
      url=res.presinedUrl;
      imagePath=res.filePath
      this.uploadImage(url,imagePath)


    })
  }

  uploadImage(url:any,imagePath:any){
   console.log(`url is : ${url} and imagePath is : ${imagePath}`);
    this.service.upload(url,imagePath).subscribe((res:any)=>{
      console.log("Image uploaded seccesfully",res);
    })
    
  }


   getFileNameFromPath(path:any) {
    // Split the path by backslashes
    const parts = path.split('\\');
    // Get the last part (the filename
    const filename = parts[parts.length - 1];
    console.log('image name :',filename);
    return filename;
}





  // getText(){
  //   this.service.gettext().subscribe((res:any)=>{
  //     console.log("text coming from lamda fuctioon**** :",res);
  //   })
  // }

  // getSum(){
  //   this.service.getSum().subscribe((res:any)=>{
  //     console.log("Text coming from lamda function :**** :",res);
  //   })
  // }

  // getUser(){
  //   this.service.getUser().subscribe((res:any)=>{
  //     console.log("User is  :**** :",res);
  //   }) 
  // }

  sumNum(){
    this.service.addSum().subscribe((res:any)=>{
      console.log("Sum is  :**** :",res);
    }) 
  }


  invokeLamda(){
    console.log("invoking function calling")
  this.service.invoke().subscribe((res:any)=>{
    console.log("Invoking data coming :",res);
  })
  }

  // userSubmit(){
  //   console.log("User submit :",this.userForm.value);
  //    this.service.addUser(this.userForm.value).subscribe((res:any)=>{
  //    console.log("User add successfully :",res);
  //    })
  // }


}
