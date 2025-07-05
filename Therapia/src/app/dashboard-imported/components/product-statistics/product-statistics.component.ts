import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-statistics.component.html',
  styleUrls: ['./product-statistics.component.scss']
})
export class ProductStatisticsComponent {
  // products = [
  //   { name: 'Macbook Pro', value: 76 },
  //   { name: 'iPhone 14 Pro', value: 54 },
  //   { name: 'iPad Air', value: 42 },
  //   { name: 'Apple Watch', value: 63 },
  //   { name: 'AirPods Pro', value: 33 }
  // ];
}

