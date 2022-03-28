import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeemanagerService } from '../employeemanager.service';
import { EmployeesComponent } from '../employees/employees.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public employees:EmployeesComponent, public service:EmployeemanagerService, public dialogRef:MatDialogRef<UpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public employee:any) { }

  ngOnInit(): void {
  }

  confirmDelete(id:number) {
    this.service.deleteEmployee(id)
    this.employees.getEmployees()
  }

}
