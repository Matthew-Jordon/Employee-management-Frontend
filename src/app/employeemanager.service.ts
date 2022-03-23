import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagerService {

  employeeschanged = new Subject<void>();
  employees!:Employee[]

  constructor(private http: HttpClient) {}

  private apibaseUrl = environment.apiUrl

  public  getEmployees() {
    this.http.get<Employee[]>(`${this.apibaseUrl}all`).subscribe((response)=>{
      this.employees = response
      this.employeeschanged.next()
    }, (error)=>{
      alert(error.message)
    })
  }

  public addEmployee(employee: Employee) {
    this.http.post<Employee>(`${this.apibaseUrl}add`, employee).subscribe((response)=>{
      this.getEmployees()
     },
    (error)=>{
      alert(error.message)
    })
  }

  public updateEmployee(employee: Employee) {
    this.http.put(`${this.apibaseUrl}update`, employee).subscribe((response)=>{
      this.getEmployees()
     },
    (error)=>{
      alert(error.message)
    })

  }

  public findEmployee(id:number) {
    return this.http.get(`${this.apibaseUrl}find/${id}`)
  }

  public deleteEmployee(id:number) {
    this.http.delete<void>(`${this.apibaseUrl}delete/${id}`).subscribe((response)=>{
      this.getEmployees()
     },
    (error)=>{
      alert(error.message)
    });
  }
}


