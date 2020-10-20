import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:9601/v1/users');
  }

  getUser(userId: string) {
    return this.http.get('http://localhost:9601/v1/users/' + userId);
  }

  getPosts() {
    return this.http.get('http://localhost:9600/v1/posts');
  }
}
