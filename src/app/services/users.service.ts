import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from './http-error-handler.service';
import { environment } from '../../environments/environment';
import {UsersModel1} from "../models/UsersModel";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.apiUrl}/users`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('UsersService')
  }

  getUsers() {
    return this.http.get<UsersModel1[]>(`${this.apiUrl}/users`)
  }

  /** GET user by id. Will 404 if id not found */
  getUserById(id: number) {
    console.log("id");
    console.log(id);
    return this.http.get<UsersModel1>(`${this.apiUrl}/getUserById/${id}`)
  }

  updateUser(user: UsersModel1) {
    return this.http.post<number>(`${this.apiUrl}/updateUser`, user)
  }

  deleteUser(user: UsersModel1) {
    return this.http.post<number>(`${this.apiUrl}/deleteUser`, user)
  }

  getAges(users: UsersModel1[]) {
    const ages: number[] = [];
    users.forEach(user => {
        let userBirthday = new Date(user.birthday);
        let userBirthyear = userBirthday.getFullYear();
        let presentYear = new Date().getFullYear();
        const age: number = presentYear - userBirthyear;
        ages.push(age);
        console.log(ages);
    });
    return ages;
  }

}