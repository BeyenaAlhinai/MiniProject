import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  private URL = 'http://localhost:3000/posts';
  private regURL = 'http://localhost:3000/users';

  constructor(private _http:HttpClient) { }

  getList(){

   return this._http.get(this.URL);

  }



  add(data: any){

    return this._http.post(this.URL, data);

  }



  deletestudent(id: any){

    return this._http.delete(`${this.URL}/${id}`)

  }

  getCurrentData(id: any){

    return this._http.get(`${this.URL}/${id}`)

  }

  updatestudent(id: any,data: any){

    return this._http.put(`${this.URL}/${id}`,data)

  }

 

  createUser(data: any){

    return this._http.post(this.regURL, data);

  }

  loginUser(email: string, password: string){

    return this._http.post(this.regURL,{

      email: email,

      password: password

    });

  }}