import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  studentId : string = '0';
  studentsArr:any =  [
    {ID:1, Name:"Idan Guy", Course:"Angular 2"}, 
    {ID:2, Name:"Sharon Tal", Course:"Angular 1"}, 
    {ID:3, Name:"Yuval Shir", Course:"Python"}, 
    {ID:4, Name:"Adam Gil", Course:"Angular 2"},
    {ID:5, Name:"Yonathan Nahmias", Course:"Angular 1"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
