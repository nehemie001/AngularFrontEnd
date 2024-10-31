import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LayoutsComponent } from "../../../layouts/layouts.component";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [LayoutsComponent, RouterLink],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  goToEdit() {
    this.router.navigate(['/dashboard/user']);
  }
}
