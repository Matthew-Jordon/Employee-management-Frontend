import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeemanagerService } from '../employeemanager.service';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {

  constructor(public service:EmployeemanagerService, public router:Router, public employees: EmployeesComponent) { }

  ngOnInit(): void {
  }

  onSubmit(form:any) {
    if (!form.invalid) {
      this.service.addEmployee(form.value)
      this.router.navigate(['/employees'])
    }
  }

}
