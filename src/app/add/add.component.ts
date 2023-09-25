import { Component, OnInit} from '@angular/core';
import { CommonService} from '../common.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  alert:boolean = false;
  add = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    address:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl('')

  })
  

  constructor(private posts:CommonService){}
  ngOnInit() : void{

  }
  createPosts(){
    this.posts.add(this.add.value).subscribe((result)=>{
      this.alert= true;
      this.add.reset({});
      console.log("Get Data From Service ",result);
    })
   
  
     
    }
    closeAlert(){
      this.alert = false;
    }
  }
