import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
    //console.log(localStorage.getItem('currentUser'));

    let l = window.location;
    let host:string;

    if(l.port >= '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }

    this.url = `${l.protocol}//${host}/api/auth/`;
  }

  register(user: User): Observable<User>{
    return this.http.post<User>(this.url + 'register', user, httpOptions);
  }

  login(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}/login`, user, httpOptions)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }

  isAuthenticated() {
    return localStorage.getItem('currentUser') != null;
  }
}