import { Component, OnInit } from '@angular/core';
import { LayoutsComponent } from '../../../layouts/layouts.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [LayoutsComponent],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToEdit() {
    this.router.navigate(['/dashboard/student']);
  }
}
