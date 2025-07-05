import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { StatsCardsComponent } from '../../components/stats-cards/stats-cards.component';
import { CustomerHabitsComponent } from '../../components/customer-habits/customer-habits.component';
import { ProductStatisticsComponent } from '../../components/product-statistics/product-statistics.component';
import { CustomerGrowthComponent } from '../../components/customer-growth/customer-growth.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, StatsCardsComponent, CustomerHabitsComponent, ProductStatisticsComponent, CustomerGrowthComponent],
  templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.scss'] 
})
export class DashboardComponent {
  barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      { label: 'Seen Product', data: [43787, 31200, 29300, 43800, 31900, 38800, 41000], backgroundColor: '#c7d2fe' },
      { label: 'Sales', data: [39784, 29000, 26800, 39600, 29000, 36000, 38000], backgroundColor: '#6366f1' }
    ]
  };

  doughnutChartData = {
    labels: ['Electronic', 'Games', 'Furniture'],
    datasets: [{
      data: [2487, 1828, 1463],
      backgroundColor: ['#6366f1', '#60a5fa', '#f472b6']
    }]
  };

  customerGrowth = [
    { country: 'United States', new: 287, total: 2417 },
    { country: 'Germany', new: 281, total: 1812 },
    { country: 'Australia', new: 236, total: 1463 },
    { country: 'France', new: 220, total: 1344 },
  ];
}
