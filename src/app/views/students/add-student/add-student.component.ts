import { Component, OnInit } from '@angular/core';
import { LayoutsComponent } from '../../../layouts/layouts.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseService } from '../../../core/services/base.service';
import { environment } from '../../../../environments/environment.development';
import { MessageService } from 'primeng/api';
import { Student } from '../../../domains/interface/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [LayoutsComponent, ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
  providers: [MessageService]
})
export class AddStudentComponent implements OnInit {
  form!: FormGroup;

  student: Student = {
    matricule: '',
    first_name: '',
    last_name: '',
    phone_father: ''
  };

  constructor(private baseService:BaseService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      matricule: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone_father: new FormControl('', Validators.required),
    });
  }

  submitForm(): void {
    this.student.matricule = this.form.value.matricule;
    this.student.first_name = this.form.value.first_name;
    this.student.last_name = this.form.value.lats_name;
      this.student.phone_father = this.form.value.phone_father;
    this.baseService
      .create(environment.endPoint.students.create, this.student, null)
      .subscribe({
        next: (response: any): void => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: ' L\eleve à bien été ajouté ', life: 3000})
          this.form.reset();
        },
        error: (error: any): void => {
          console.error(error);
        },
      });
  }
}
