import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public register_url = environment.SERVER_URL + "/user/register";
  public login_url = environment.SERVER_URL + "/user/login";

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.register_url, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(this.login_url, user);
  }
}
