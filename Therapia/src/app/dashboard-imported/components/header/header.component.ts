import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,  // ← دي أهم حاجة
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // ← خليها جمع مش مفرد
})
export class HeaderComponent {
  isActive = true;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
