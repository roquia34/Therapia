import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-therapist-filters',
  templateUrl: './therapist-filters.component.html',
  styleUrl: './therapist-filters.component.scss'
})
export class TherapistFiltersComponent {

  filtersForm: FormGroup;

  areas = ['Anxiety', 'Depression', 'Relationship Issues'];
  languages = ['English', 'Arabic'];
  countries = ['Egypt', 'UAE'];

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      today: [false],
      thisWeek: [false],
      specificDate: [false],
      area: [''],
      duration: [''],
      gender: [''],
      language: [''],
      country: [''],
      fees: [0],
      canPrescribe: [false],
      acceptsBundles: [false]
    });

    // Whenever the form changes, you can log it or use it
    this.filtersForm.valueChanges.subscribe(values => {
      console.log('Filters Changed:', values);
    });
  }

  resetFilters() {
    this.filtersForm.reset({
      today: false,
      thisWeek: false,
      specificDate: false,
      area: '',
      duration: '',
      gender: '',
      language: '',
      country: '',
      fees: 0,
      canPrescribe: false,
      acceptsBundles: false
    });
  }
}
