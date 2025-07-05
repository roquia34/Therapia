import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SubscriptionComponent } from "../../components/subscription/subscription.component";

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, SubscriptionComponent],
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {}
