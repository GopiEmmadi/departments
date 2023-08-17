import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from '../my.service';
import { HttpClient } from '@angular/common/http';
//import { EditComponent } from '../list/edit.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  //@ViewChild(EditComponent) editComponent!: EditComponent;
  editFlag!: boolean;
  sid!:number;
  student!: any;
  nature!:string;
  studentForm!: FormGroup;
  deleteFlag: boolean=true;
  createFlag!: boolean;

  constructor(private http:HttpClient,private route:ActivatedRoute,private myService: MyService,private formBuilder: FormBuilder,private router:Router){
    //this.task=this.editComponent.tasks;
    this.studentForm=new FormGroup({
      departmentId:new FormControl(),
      studentId:new FormControl(),
      name: new FormControl(),
      age: new FormControl(),
      fatherName: new FormControl(),
      mobile: new FormControl(),
      address: new FormControl()
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(p=>{      
      this.sid=+p['sid'];
      this.nature=p['nature'];
      this.fetchUsers();
    });
  }
  
  async fetchUsers() {
    try {
      const response = await this.http.get<any>(`http://localhost:8080/students/${this.myService.id}/${this.sid}/view`).toPromise();
      this.student = response;
      console.log(response);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
    
    this.studentForm = this.formBuilder.group({
      
      departmentId:new FormControl(),
      studentId:new FormControl(),
      name: new FormControl(),
      age: new FormControl(),
      fatherName: new FormControl(),
      mobile: new FormControl(),
      address: new FormControl()
    });

    
    this.studentForm.patchValue({
      departmentId:this.student.departmentId,
      studentId:this.student.studentId,
      name: this.student.name,
      age: this.student.age,
      fatherName: this.student.fatherName,
      mobile: this.student.mobile,
      address: this.student.address
    });
     
    if (this.nature==='delete'){
      this.afterDeleteTriggered();
    } 
    else if (this.nature==='create'){
      this.editFlag=false;     
      this.createFlag=true;     
      this.deleteFlag=false;
      this.afterCreateTriggered();
    } 
    else if (this.nature==="view") {
      this.editFlag=false;     
      this.deleteFlag=false;
      this.studentForm.disable();
    } else if (this.nature==='edit'){
      this.editFlag=true;
      this.deleteFlag=false;
      this.studentForm.enable();
    }
    
  }
  afterCreateTriggered() {
    this.studentForm.reset();
    //this.studentForm.enable();
    
  }
  async afterDeleteTriggered() {

    const confirmFlag=confirm('Do you want to delete?');
    if (confirmFlag) {
      try {
        const response = await this.http.delete<any>(`http://localhost:8080/students/${this.myService.id}/${this.sid}/delete`,this.student).toPromise();
        console.log(response);
        this.router.navigate(['/students',this.myService.id]);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    }
    
  }


  async submitForm() {
    const updatedValue=this.studentForm.value;


    try {
      const response = await this.http.put<any>(`http://localhost:8080/students/${this.myService.id}/${this.sid}/edit`,updatedValue).toPromise();
      this.student = response;
      console.log(response);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
    /*
    const students=this.myService.tasks;
    for (let index = 0; index < students.length; index++) {
      const element = students[index];
      if (element.departmentId===this.student.departmentId && element.studentId===this.student.studentId) {
        students[index]=this.studentForm.value;
      }
    }
    this.myService.tasks=students;   
    this.student=this.studentForm.value;
    console.log(this.student);
    */
    //this.router.navigate(['/students',this.myService.id]);
    //this.router.navigate(['/']);
    //this.myService.updateStudentData(this.studentForm.value);
    this.router.navigate(['/students',this.myService.id]);
  }
}
