import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-therapists',
  templateUrl: './our-therapists.component.html',
  styleUrls: ['./our-therapists.component.scss'],
})
export class OurTherapistsComponent implements OnInit, AfterViewInit {
  therapists: any[] = [];
  filteredTherapists: any[] = [];
  availableNowCount: number = 0;
  loading: boolean = true;
  availableTherapistsList: any[] = [];
  Math = Math;


  @ViewChild('searchInput') searchInputRef!: ElementRef;
  @ViewChild('sortSelect') sortSelectRef!: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchTherapists();
  }

  ngAfterViewInit(): void {
    // استمع للتغييرات في البحث والفرز
    this.searchInputRef.nativeElement.addEventListener('input', () => {
      this.applySimpleFilters();
    });

    this.sortSelectRef.nativeElement.addEventListener('change', () => {
      this.applySimpleFilters();
    });
  }

  fetchTherapists() {
    this.http
      .get<any[]>('https://6803c4b879cb28fb3f599ecb.mockapi.io/therapists')
      .subscribe((data) => {
        this.therapists = data;
        this.filteredTherapists = [...this.therapists];
        const availableTherapists = this.therapists.filter(
          (t) => t.nextAvailableInMinutes <= 15
        );
        this.availableNowCount = availableTherapists.length;
        this.availableTherapistsList = availableTherapists.slice(0, 4);
        this.loading = false;
      });
  }

  applySimpleFilters() {
    const searchValue = this.searchInputRef.nativeElement.value.toLowerCase();
    const sortValue = this.sortSelectRef.nativeElement.value;

    let filtered = [...this.therapists];

    // فلترة البحث
    if (searchValue) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchValue) ||
        t.specialty?.toLowerCase().includes(searchValue)
      );
    }

    // ترتيب بالسعر
    if (sortValue === 'Fees (Low To High)') {
      filtered = filtered.sort((a, b) => a.sessionPrice - b.sessionPrice);
    } else if (sortValue === 'Fees (High To Low)') {
      filtered = filtered.sort((a, b) => b.sessionPrice - a.sessionPrice);
    }

    this.filteredTherapists = filtered;
  }

  showAvailableTherapists() {
    this.filteredTherapists = this.therapists.filter(
      (t) => t.nextAvailableInMinutes <= 15
    );
  }

  viewProfile() {
    this.router.navigate(['/therapist-profile', 'default']);
  }
}
