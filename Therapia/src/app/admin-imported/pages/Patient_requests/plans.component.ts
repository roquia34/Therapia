import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../Components/sidebar/sidebar.component";
import { HeaderComponent } from "../../Components/header/header.component";
import { RequestCardComponent } from "../../Components/content/content.component";

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, HeaderComponent, RequestCardComponent],
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {}
