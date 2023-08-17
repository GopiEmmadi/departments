import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(private route: ActivatedRoute,private myService: MyService,private router:Router,private http:HttpClient) {}

  ngOnInit(): void {
    console.log(this.route.url);
    
    this.route.params.subscribe(p=>{
      this.id=+p['id'];
      console.log(this.id);
      
      if (this.id) {
        this.fetchUsers();
      } else{
        this.tasks=this.myService.tasks;
      }
    });
  }
  
  editButton(i:number){            
    this.flag=true;
    this.router.navigate(['/students',this.id,i,'view']);    
    /*
    this.myService.ind=i;
    this.myService.task=this.myService.tasks[i];
    this.route.navigate(['/edit']);
    */
  }
  editb(i:number){
    this.router.navigate(['/students',this.id,i,'edit']);    
  }

  deleteButton(i:number){
    this.router.navigate(['/students',this.id,i,'delete']);    
  }
  create(i:number){
    this.router.navigate(['/students',this.id,i,'create']);    
    console.log(this.router.url);
    
  }
  fetchUsers() {
    this.http.get<any[]>(`http://localhost:8080/students/${this.id}`).subscribe(
      (response) => {
        this.tasks = response;
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );
    this.myService.dtasks=this.tasks;    
    this.myService.id=this.id;
  }
}
