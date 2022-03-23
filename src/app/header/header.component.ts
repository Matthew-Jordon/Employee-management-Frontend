import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  key!:string

  constructor(public employees:EmployeesComponent) { }

  ngOnInit(): void {
  }


}
