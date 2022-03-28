import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee';
import { EmployeemanagerService } from '../employeemanager.service';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(public employees:EmployeesComponent, public service:EmployeemanagerService, public dialogRef:MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public employee:any) { }

  ngOnInit(): void {
  }

  onSubmit(employee:any) {
    console.log(employee)
    this.service.updateEmployee(employee)
    this.employees.getEmployees()
  }

}
