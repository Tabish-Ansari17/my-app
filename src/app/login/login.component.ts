import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  signupForm!: FormGroup;
  myForm!: FormGroup;

  constructor(private service :ServicesService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      remember: new FormControl(true)
    });
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      // check: new FormControl(false)
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.service.userDetailsSubmit(this.signupForm.value).subscribe((res:any)=>{
         
        console.log("Submit user :",res);
      })
    }
  }

  submitForm() {
    // Handle form submission logic here
    console.log(this.myForm.value);
    this.service.checkUserDetails(this.myForm.value).subscribe((res:any)=>{
      console.log("Checking user details :",res);
    })
  }

  
}
