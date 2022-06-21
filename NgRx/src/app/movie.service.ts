import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from './interfaces/student.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  addStudent(student: Student) {
    return this.http.post(
      'https://saran-hogwarts-backend.herokuapp.com/addStudent',
      student,
      { responseType: 'text' }
    );
  }

  getStudents() {
    return this.http.get<Student[]>(
      'https://saran-hogwarts-backend.herokuapp.com/getStudents'
    );
  }

  updateStudent(field: string, id: string, value: string) {
    const newValue = { field: value };
    return this.http.put(
      `https://saran-hogwarts-backend.herokuapp.com/updateStudent/${field}/${id}`,
      newValue,
      { responseType: 'text' }
    );
  }

  deleteStudent(id: string) {
    return this.http.delete(
      `https://saran-hogwarts-backend.herokuapp.com/deleteStudent/${id}`,
      { responseType: 'text' }
    );
  }
}
