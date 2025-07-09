import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-my-session-dashbord',
  templateUrl: './my-session-dashbord.component.html',
  styleUrls: ['./my-session-dashbord.component.scss'],
   animations: [
    trigger('formSliderAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ]
})
export class MySessionDashbordComponent implements OnInit {
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  selectedMonth = 'June';
  selectedDay: number | null = null;
  days: { dayName: string, date: number }[] = [];
  showFormSlider = false;
  showModal = false;
  selectedSection: any = null;
  inputValue: string = '';
  showSections = false;

  // Form data structure
  formData = {
    exercises: [] as string[],
    duration: { hours: 0, minutes: 0 },
    meals: [] as string[],
    waterIntake: 0,
    notes: ''
  };

  // Options for form fields
  exerciseOptions = ['Push-ups', 'Running', 'Yoga', 'Swimming', 'Cycling', 'Weight Training'];
  mealOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Fruits', 'Vegetables'];
  waterOptions = [1, 2, 3, 4, 5, 6, 7, 8]; // cups

  events = [
    { time: '2:00 pm', title: 'Meeting with chief physician Dr. Williams' },
    { time: '2:30 pm', title: 'Consultation with Mr. White' },
    { time: '3:00 pm', title: 'Consultation with Mrs. Maisy' },
    { time: '3:30 pm', title: 'Examination of Mrs. Lee\'s freckle' },
  ];

  @Input() username = 'roqaya16';
  @Input() walletAmount = 0;
  @Input() avatarUrl: string | null = null;

  selectedTab: 'upcoming' | 'previous' | 'requests' | 'wallet' = 'upcoming';

  stats = [
    { title: 'Total Sales', value: '$612,917', change: '+2.09%', type: 'positive' },
    { title: 'Total Orders', value: '34,760', change: '+12.41%', type: 'positive' },
    { title: 'Visitor', value: '14,987', change: '-2.08%', type: 'negative' },
    { title: 'Total Sold Products', value: '12,987', change: '+12.19%', type: 'positive' },
  ];

  productStatisticsData = {
    labels: ['Electronic', 'Games', 'Furniture'],
    datasets: [
      {
        data: [2487, 1828, 1463],
        backgroundColor: ['#6366f1', '#22c55e', '#ef4444'],
      }
    ]
  };

  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

 customerHabitsData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [
    {
      label: 'Sessions',
      data: [5, 7, 6, 8], 
      backgroundColor: '#6366f1',
      borderRadius: 10,
      barThickness: 30
    }
  ]
};


  customerHabitsOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
      }
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#111827',
      titleColor: '#fff',
      bodyColor: '#fff',
      cornerRadius: 10,
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Weeks',
        color: '#374151'
      },
      ticks: {
        color: '#6b7280'
      },
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Number of Sessions',
        color: '#374151'
      },
      ticks: {
        color: '#6b7280',
        stepSize: 1
      },
      grid: {
        color: '#e5e7eb'
      }
    }
  }
};


  customerHabitsDataEmpty = true;

  ngOnInit() {
    this.generateDays();
    this.customerHabitsDataEmpty = this.customerHabitsData.datasets.length === 0;
  }

  generateDays() {
    const monthIndex = this.months.indexOf(this.selectedMonth);
    const year = new Date().getFullYear();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    this.days = [];
    for (let date = 1; date <= daysInMonth; date++) {
      const day = new Date(year, monthIndex, date).getDay();
      this.days.push({ dayName: dayNames[day], date });
    }
  }

  selectDay(date: number) {
    if (this.selectedDay === date && this.showFormSlider) {
      this.showFormSlider = false;
      this.selectedDay = null;
    } else {
      this.selectedDay = date;
      this.showFormSlider = true;
      this.resetFormData();
    }
  }

  resetFormData() {
    this.formData = {
      exercises: [],
      duration: { hours: 0, minutes: 0 },
      meals: [],
      waterIntake: 0,
      notes: ''
    };
  }

  // Get current date for form title
  getCurrentDate(): string {
    if (this.selectedDay) {
      return `${this.selectedMonth} ${this.selectedDay}`;
    }
    return 'Today';
  }

  // Exercise methods
  toggleExercise(exercise: string) {
    const index = this.formData.exercises.indexOf(exercise);
    if (index > -1) {
      this.formData.exercises.splice(index, 1);
    } else {
      this.formData.exercises.push(exercise);
    }
  }

  isExerciseSelected(exercise: string): boolean {
    return this.formData.exercises.includes(exercise);
  }

  // Duration methods
  updateDuration(type: 'hours' | 'minutes', increase: boolean) {
    if (type === 'hours') {
      if (increase && this.formData.duration.hours < 24) {
        this.formData.duration.hours++;
      } else if (!increase && this.formData.duration.hours > 0) {
        this.formData.duration.hours--;
      }
    } else {
      if (increase && this.formData.duration.minutes < 59) {
        this.formData.duration.minutes++;
      } else if (!increase && this.formData.duration.minutes > 0) {
        this.formData.duration.minutes--;
      }
    }
  }

  // Meal methods
  toggleMeal(meal: string) {
    const index = this.formData.meals.indexOf(meal);
    if (index > -1) {
      this.formData.meals.splice(index, 1);
    } else {
      this.formData.meals.push(meal);
    }
  }

  isMealSelected(meal: string): boolean {
    return this.formData.meals.includes(meal);
  }

  // Water intake methods
  setWaterIntake(cups: number) {
    this.formData.waterIntake = cups;
  }

  // Form submission and clearing
  submitForm() {
    const submissionData = {
      date: this.selectedDay,
      month: this.selectedMonth,
      year: new Date().getFullYear(),
      ...this.formData
    };

    console.log('Submitting daily data:', submissionData);
    
    // Here you would typically send the data to a service
    // this.dataService.saveDailyData(submissionData);
    
    alert('Data saved successfully!');
    this.showFormSlider = false;
    this.selectedDay = null;
  }

  clearForm() {
    this.resetFormData();
  }

  // Other existing methods
  selectTab(tab: 'upcoming' | 'previous' | 'requests' | 'wallet') {
    this.selectedTab = tab;
  }

  scrollLeft() {
    this.sliderContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.sliderContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  openModal(section: any) {
    this.selectedSection = section;
    this.showModal = true;
    this.inputValue = '';
  }

  closeModal() {
    this.showModal = false;
    this.selectedSection = null;
    this.inputValue = '';
  }

  saveModal() {
    if (this.inputValue.trim() === '') {
      alert('Please fill in the field before submitting!');
      return;
    }
    console.log(`Saved ${this.selectedSection.title}: ${this.inputValue}`);
    this.closeModal();
  }

  clearInput() {
    this.inputValue = '';
  }
}
