import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../my.service';
//import { EditComponent } from '../list/edit.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //@ViewChild(EditComponent) editComponent!: EditComponent;
  sid!:number;
  task!: any;
  constructor(private route:ActivatedRoute,private myService: MyService){
    //this.task=this.editComponent.tasks;    
  }
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.sid=+p['sid'];  
      this.fetchUsers();
    });
  }
  fetchUsers() {
    this.task=this.myService.dtasks.find(d=>d.studentId==this.sid);
  }
}
