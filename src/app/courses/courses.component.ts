import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesArr:any =  [
    {Number:292100, Name:"JAVA1", Semester:"A"}, 
    {Number:292101, Name:"JAVA2", Semester:"B"}, 
    {Number:292102, Name:"Python", Semester:"A"},
    {Number:292103, Name:"Angular", Semester:"B"},
    {Number:292104, Name:"Angular", Semester:"A"},
    {Number:292105, Name:"React", Semester:"B"}, 
    {Number:292106, Name:"MongoDB", Semester:"B"},
    {Number:292107, Name:"Sql", Semester:"A"}
  ];
  
  coursesInSemester : number = 4;

  message : string = 'Courses information';

  isPythonActive : boolean = true;

  totalCourses : Number = 8;

  coursesList : Array<string> | string[] = ["Java 1","Java 2","Python","Angular 1","Angular 2","React","MongoDB","Sql"]

  constructor() {
    console.log(this.getCoursesInSemester());
    this.showMessage();
    this.printCourses();
    console.log(this.checkPython());
    console.log(this.checkCourses());  
   }

  ngOnInit(): void {
  }

  getCoursesInSemester():number {
    return this.coursesInSemester;
  }

  showMessage (): void {
    console.log(this.message);
  }

  printCourses(): void {
    for(let course of this.coursesList) {
       console.log(course);
    }
  }

  checkPython (): boolean {
     return this.isPythonActive
  }

  checkCourses() : boolean {
    return this.coursesInSemester >3;
  }
}
