import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { Employee } from './employee';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { EmployeemanagerService } from './employeemanager.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddemployeeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeemanagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
