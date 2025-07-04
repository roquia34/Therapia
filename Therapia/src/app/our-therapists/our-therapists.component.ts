import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-our-therapists',
  templateUrl: './our-therapists.component.html',
  styleUrls: ['./our-therapists.component.scss'],
  
  
})
export class OurTherapistsComponent implements OnInit {
  therapists: any[] = [];
  filteredTherapists: any[] = [];
  availableNowCount: number = 0;
  loading: boolean = true;
  filterForm!: FormGroup;
  Math = Math; // حل مشكلة Math
  availableTherapistsList: any[] = [];

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchTherapists();
    this.initForm();
  }

  fetchTherapists() {
    this.http.get<any[]>('https://6803c4b879cb28fb3f599ecb.mockapi.io/therapists')
      .subscribe((data) => {
        this.therapists = data;
        this.filteredTherapists = [...this.therapists];
        const availableTherapists = this.therapists.filter(t => t.nextAvailableInMinutes <= 15);
        this.availableNowCount = availableTherapists.length;
        this.availableTherapistsList = availableTherapists.slice(0, 4); // خد أول ٤ بس
        this.loading = false;
      });
  }
  
  
  initForm() {
    this.filterForm = this.fb.group({
      search: [''],
      sortBy: [''],
      availability: [false],
      maxPrice: [null],
      gender: [''],
      language: ['']
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  applyFilters() {
    let { search, sortBy, availability, maxPrice, gender, language } = this.filterForm.value;
    let filtered = [...this.therapists];

    if (search) {
      filtered = filtered.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (availability) {
      filtered = filtered.filter(t => t.nextAvailableInMinutes <= 15);
    }

    if (maxPrice != null) {
      filtered = filtered.filter(t => t.sessionPrice <= maxPrice);
    }

    if (gender) {
      filtered = filtered.filter(t => t.gender === gender);
    }

    if (language) {
      filtered = filtered.filter(t => t.language?.toLowerCase() === language.toLowerCase());
    }

    if (sortBy === 'priceAsc') {
      filtered = filtered.sort((a, b) => a.sessionPrice - b.sessionPrice);
    } else if (sortBy === 'priceDesc') {
      filtered = filtered.sort((a, b) => b.sessionPrice - a.sessionPrice);
    } else if (sortBy === 'rating') {
      filtered = filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    this.filteredTherapists = filtered;
  }

  resetFilters() {
    this.filterForm.reset({
      search: '',
      sortBy: '',
      availability: false,
      maxPrice: null,
      gender: '',
      language: ''
    });
  }

  showAvailableTherapists() {
    this.filteredTherapists = this.therapists.filter(t => t.nextAvailableInMinutes <= 15);
  }
  
}
