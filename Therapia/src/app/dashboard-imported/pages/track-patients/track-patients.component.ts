import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { DailyActivityTrackerComponent } from "../../components/daily-activity-tracker/daily-activity-tracker.component";

@Component({
  selector: 'app-track-patients',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, DailyActivityTrackerComponent],
  templateUrl: './track-patients.component.html',
  styleUrls: ['./track-patients.component.scss']
})
export class TrackPatientsComponent {}
