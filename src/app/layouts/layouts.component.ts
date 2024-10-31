import { Component } from '@angular/core';
import { SidebarComponent } from "../components/sidebar/sidebar.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {

}
