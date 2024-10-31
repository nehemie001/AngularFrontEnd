import { Component, OnInit } from '@angular/core';
import { LayoutsComponent } from "../../../layouts/layouts.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../domains/interface/user';
import { BaseService } from '../../../core/services/base.service';
import { MessageService } from 'primeng/api';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [LayoutsComponent, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  providers: [MessageService]
})
export class AddUserComponent implements OnInit {
  form!: FormGroup

  user: User = {
    pseudo: '',
    password: '',
    confirme_password: ''
  }

  constructor(private baseService:BaseService, private messageService:MessageService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirme_password: new FormControl('', Validators.required),
    });
  }
  
  submitForm(): void {
    this.user.pseudo = this.form.value.pseudo;
    this.user.password = this.form.value.password;
    this.user.confirme_password = this.form.value.confirme_password;
    this.baseService
      .create(environment.endPoint.users.create, this.user, null)
      .subscribe({
        next: (response: any): void => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: ' L\utilisateur à bien été ajouté ', life: 3000})
          this.form.reset();
        },
        error: (error: any): void => {
          console.error(error);
        },
      });
  }
}
