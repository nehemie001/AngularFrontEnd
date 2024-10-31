import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { ListTeacherComponent } from './views/teachers/list-teacher/list-teacher.component';
import { AddStudentComponent } from './views/students/add-student/add-student.component';
import { ListUserComponent } from './views/users/list-user/list-user.component';
import { ListStudentComponent } from './views/students/list-student/list-student.component';
import { AddTeacherComponent } from './views/teachers/add-teacher/add-teacher.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },

    //  Dashboard route
  {
    path: 'dashboard',
    children: [
    //   { path: '', component: HomeDashboardComponent },
      { path: 'student', component: ListStudentComponent},
      { path: 'add-student', component: AddStudentComponent},
      { path: 'add-teacher', component: AddTeacherComponent},
      { path: 'user', component: ListUserComponent },
      { path: 'add-user', component: AddStudentComponent },
      { path: 'teacher', component: ListTeacherComponent},
    //   { path: 'rapport', component: RapportComponent}
    ],
  },
];
