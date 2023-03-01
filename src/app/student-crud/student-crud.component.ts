import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css'],
})
export class StudentCrudComponent implements OnInit {
  studentArray: any[] = [];

  ngOnInit() {
    this.getAllStudent();
  }

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  getAllStudent() {
    console.log("Get all student Function called");
    this.http
      .get('http://localhost:8000/user/getAll')
      .subscribe((userData: any) => {
        console.log()
        this.studentArray = userData.data;
      });
  }
}
