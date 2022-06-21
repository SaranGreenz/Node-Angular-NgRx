import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service'
import Student from '../interfaces/student.model'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  student: Student = {
    "Name": "",
    "Age": 0,
    "House": "",
    "Gender":"",
    "Father": "",
    "Mother": "",
    "DateOfBirth": new Date()
  }

  addStudent(){
    
  }


}
