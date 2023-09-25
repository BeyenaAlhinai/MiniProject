import { Component } from '@angular/core';
import { CommonService} from '../common.service';
import { FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  alert: boolean = false;


  edit = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private posts: CommonService, private router: ActivatedRoute) {}
  ngOnInit(): void {

    this.posts.getCurrentData(this.router.snapshot.params['id']).subscribe(

      (result:any) => {

        this.edit = new FormGroup({

          id: new FormControl(result['id']), 

          name: new FormControl(result['name ']),

          address: new FormControl(result['address']),

          mobile: new FormControl(result['mobile']),

          email: new FormControl(result['email']),

        });
      },
    );
    }
    updatestudent() {

      Swal.fire({
  
        title: 'Confirm Update',
  
        text: 'Are you sure you want to update this data ',
  
        icon: 'question',
  
        showCancelButton: true,
  
        confirmButtonText: 'Yes, update it!',
  
        cancelButtonText: 'No, cancel'
  
      }).then((result: any) => {
  
        if (result.isConfirmed) {
  
          this.posts.updatestudent(this.router.snapshot.params['id'], this.edit.value).subscribe((result) => {
  
            console.log(result, 'Data updated successfully');
  
            this.alert = true;
  
          });
  
        }
  
      });
  
    }

 

    closeAlert() {

      this.alert = false;
  
    }
  
  }

 