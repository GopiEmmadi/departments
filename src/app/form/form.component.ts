import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      console.log(p['fid']);
    });
  }
}
