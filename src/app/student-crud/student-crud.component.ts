import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-crud',
  templateUrl: './student-crud.component.html',
  styleUrls: ['./student-crud.component.css'],
})
export class StudentCrudComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm!: NgForm;
  studentArray: any[] = [];

  firstName: string = '';
  empID: number = 0.0;
  phoneNumberr: number = 0.0;
  currentStudentID = '';

  ngOnInit() {
    this.getAllStudent();
  }

  constructor(private http: HttpClient) {}

  getAllStudent() {
    console.log('Get all student Function called');
    this.http
      .get('http://localhost:8000/user/getAll')
      .subscribe((userData: any) => {
        console.log();
        this.studentArray = userData.data;
      });
  }

  register() {
    let bodyData = {
      name: this.firstName,
      empID: this.empID,
      phone: this.phoneNumberr,
    };

    this.http
      .post('http://localhost:8000/user/create', bodyData)
      .subscribe((res) => {
        console.log('User created successfully', res);
        this.getAllStudent();
        this.onCLear();
      });
  }

  delete(data: any) {
    this.http
      .delete('http://localhost:8000/user/delete' + '/' + data._id)
      .subscribe((result) => {
        console.log('Deletedd', result);
        this.getAllStudent();
      });
  }

  update(data: any) {
    this.firstName = data.name;
    this.empID = data.empID;
    this.phoneNumberr = data.phone;
    this.currentStudentID = data._id;
  }

  updateRecord() {
    let bodyData = {
      name: this.firstName,
      empID: this.empID,
      phone: this.phoneNumberr,
    };

    this.http
      .patch(
        'http://localhost:8000/user/update' + '/' + this.currentStudentID,
        bodyData
      )
      .subscribe((result) => {
        console.log('Updated', result);
        this.getAllStudent();
        this.onCLear();
      });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
    } else {
      this.updateRecord();
    }
  }

  onCLear() {
    console.log('clear fucntion called');
    let form = this.slForm;
    form.reset();
    this.firstName = '';
    this.empID = 0.0;
    this.phoneNumberr= 0.0;

  }
}
