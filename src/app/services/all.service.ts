import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  set userData(value: any) {
    if (value) {
      localStorage.setItem('userData', JSON.stringify(value));
    }
  }

  get userData() {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : {};
  }

  getUser(userid: string, date: string): Observable <any> {
    const httpParams = new HttpParams({
      fromObject: {userid, date}
    });
    return this.http.get('https://haa463q4bi.execute-api.ap-south-1.amazonaws.com/dev/user', {params: httpParams})
  }

  login(data: any): Observable <any> {
    return this.http.post('https://tjsaiyoe53.execute-api.ap-south-1.amazonaws.com/dev/login', data)
  }
}
