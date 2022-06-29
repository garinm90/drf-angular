import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = "http://localhost:8000/api/v1"

  constructor(private http: HttpClient) { }

  /**
   * getTasks
   */
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}/posts/`);
  }

}
