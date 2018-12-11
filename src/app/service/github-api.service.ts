import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { GithubUser } from './../models/github-user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private headers: HttpHeaders = new HttpHeaders();
  private apiServer = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
      this.headers.set('Content-Type', 'application/json');
  }

  getUsers(): Observable<GithubUser[]> {
    return this.http.get<any>(this.apiServer, { headers: this.headers });
  }
}
