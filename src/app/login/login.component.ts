import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  mobileno: string='';
  password: string='';
  hero: any;
  users:any;
  headers:any;
  errorMsg:boolean= false;

  constructor(private router:Router,private snackBar: MatSnackBar, private formBuilder: FormBuilder,private authService: AuthenticationService, private http:HttpClient){
      this.loginForm=this.formBuilder.group({
        mobileno:['',[Validators.required]],
        password:['',[Validators.required]]
      })
 
  }
  ngOnInit(): void {
  }
  // getcsrf(){
  //   this.http.get("http://192.168.0.113:8000/get_csrf/").subscribe(
  //   (res) => {this.users=res;
  //             const csrfToken=this.users.csrf_token;
  //             console.log(csrfToken)
  //             this.headers = new HttpHeaders(
  //                          {'Content-Type':'application/json',
  //                           'X-CSRFToken':csrfToken,
  //                          });
  // })
  // console.log(this.headers)
  // return this.headers;
  // }

  onSubmit(){
         /* console.log(this.getcsrf());
          this.http.post("http://192.168.0.113:8000/login/",this.loginForm.value,{headers:this.headers}).subscribe(
                   (res)=>{console.log(res);
                           this.router.navigate(['dashboard'])})
            */
                           if (this.loginForm.valid) {
                            const { mobileno, password } = this.loginForm.value;
                            this.authService.login(mobileno, password)
                              .subscribe(response => {
                                console.log(response)
                                // Handle successful login and navigation
                                if (response === "Login Successful For Admin"){
                                  console.log(response);
                                  this.router.navigate(['./admin-users'])
                                  this.errorMsg = false;
                                }
                                else{
                                  this.router.navigate(['./login'])
                                  this.errorMsg = true;
                                }
                               
                              },
                              error => {
                                // Handle login error
                                console.log(error);
                              });
                          }
          }
  
 
 /* private showSnackbarAlert(message: string): void{
    this.snackBar.open(message, 'close', {duration: 3000,});
  }
*/


  

}
