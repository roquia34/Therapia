import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MonthlySessionSummaryComponent } from "../../components/monthly-session-summary/monthly-session-summary.component";

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, MonthlySessionSummaryComponent],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {}
