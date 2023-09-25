
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='';
  email: string = ''
 password: string = '';
  constructor(){}

  ngOnInit() {
  
  }
  logInUser(){
    if(this.email=="beyenaalhinai@gmail.com" && this.password=="123"){
      console.log("Welcome to  dashboard User")
    }
    else{
      console.log("user Unauthorized");
    }
  }
  

}
