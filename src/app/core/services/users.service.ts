import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  
  createUser(user: { name: string, job: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}
