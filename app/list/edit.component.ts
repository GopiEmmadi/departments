import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!: number;
  tasks!: any[];
  task!: any;
  flag: boolean=false;
  constructor(private route: ActivatedRoute,private myService: MyService,private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.id=+p['id'];
      console.log(this.id);
      
      if (this.id) {
        this.fetchUsers();
      } else {
        this.tasks=this.myService.tasks;
      }
    });
  }
  
  editButton(i:number){            
    this.flag=true;
    this.router.navigate(['/',this.id,i]);    
    /*
    this.myService.ind=i;
    this.myService.task=this.myService.tasks[i];
    this.route.navigate(['/edit']);
    */
  }
  editb(){
    console.log("c");
  }
  fetchUsers() {
    this.flag=false;
    this.tasks=this.myService.tasks.filter(x=>x.departmentId==this.id);
    this.myService.dtasks=this.tasks;    
  }
}
