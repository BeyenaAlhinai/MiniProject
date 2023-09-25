import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {
 
  public collection:any;
 alert:boolean=false;
  
  constructor( private posts : CommonService)

  {}

  
  ngOnInit(): void {
    this.posts.getList().subscribe(
      (result) => {
        this.collection = result;
        console.log(this.collection);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
  deletestudent(posts: { id: any }) {

    Swal.fire({

      title: 'Are you sure?',

      text: 'You will not be able to recover this bag!',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Yes, delete it!',

      cancelButtonText: 'No, keep it'

    }).then((result:any) => {

      if (result.isConfirmed) {

        this.collection.splice(posts.id, 1); // Corrected deletion logic

        this.posts.deletestudent(posts).subscribe((result) => {

          console.log('Data is Deleted Successfully!', result);

          this.alert = true;

        });

      }

    });

}}
