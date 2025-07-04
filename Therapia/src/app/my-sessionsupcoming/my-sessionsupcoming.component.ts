import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Appointment {
  id: number;
  doctorName: string;
  doctorSpecialty: string;
  sessionTime: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  doctorImage?: string;
}

@Component({
  selector: 'app-my-sessionsupcoming',
  templateUrl: './my-sessionsupcoming.component.html',
  styleUrl: './my-sessionsupcoming.component.scss'
})
export class MySessionsupcomingComponent  {
  activeMenuItem = 'upcoming';
  
  upcomingAppointments: Appointment[] = [
    {
      id: 1,
      doctorName: 'Dr. Ahmed Hassan',
      doctorSpecialty: 'Psychologist',
      sessionTime: '10:00 AM - 11:00 AM',
      date: '2025-07-01',
      status: 'upcoming',
      doctorImage: 'assets/doctor1.jpg'
    },
    {
      id: 2,
      doctorName: 'Dr. Mona Ali',
      doctorSpecialty: 'Psychiatrist',
      sessionTime: '2:00 PM - 3:00 PM',
      date: '2025-07-02',
      status: 'upcoming',
      doctorImage: 'assets/doctor2.jpg'
    },
    {
      id: 3,
      doctorName: 'Dr. Omar Mahmoud',
      doctorSpecialty: 'Therapist',
      sessionTime: '4:00 PM - 5:00 PM',
      date: '2025-07-03',
      status: 'upcoming',
      doctorImage: 'assets/doctor3.jpg'
    }
  ];

  menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'guideline', label: 'Guideline', icon: '📋' },
    { id: 'upcoming', label: 'Upcoming', icon: '📅' },
    { id: 'previous', label: 'Previous', icon: '⏮️' },
    { id: 'requests', label: 'Requests', icon: '📥' },
    { id: 'wallet', label: 'Wallet', icon: '💳' },
    { id: 'profile', label: 'Profile Edit', icon: '👤' }
  ];

  setActiveMenuItem(itemId: string) {
    this.activeMenuItem = itemId;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
}