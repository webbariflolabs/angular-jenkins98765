import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(mobileno: string, password: string) {
    const body = { mobileno, password };
    return this.http.post<any>('http://192.168.0.137:8000/login/', body);
  }

  onSubmitAddUser(userDetails:any){
    console.log(userDetails);
    return this.http.post<any>('http://127.0.0.1:8000/user/',userDetails)
  }



  
  getData() {
    return this.http.get('http://127.0.0.1:8000/user_view/');
  }


  editUserData(userData:any){
    const userDetails = {mobileno: userData[1], newusername: userData[0], newuseremail: userData[3], usertype: userData[2]};

    return this.http.post<any>('http://127.0.0.1:8000/user_edit/', userDetails)
  }

}
