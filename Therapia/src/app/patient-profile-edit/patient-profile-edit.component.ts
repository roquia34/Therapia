import { Component , OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface ProfileData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  about: string;
}

@Component({
  selector: 'app-patient-profile-edit',
  templateUrl: './patient-profile-edit.component.html',
  styleUrls: ['./patient-profile-edit.component.scss']
})
export class PatientProfileEditComponent implements OnInit {
  // Form
  profileForm!: FormGroup;
  
  // State
  isSubmitting = false;
  showSuccessMessage = false;
  currentAvatar = '👤';
  
  // Avatar options
  private avatarEmojis = ['👤', '😊', '🎨', '🌟', '🚀', '💎', '🎭', '🦄', '🌈', '⭐', '🎪', '🎨'];
  
  // Events
  @Output() formSubmitted = new EventEmitter<ProfileData>();
  @Output() backClicked = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize reactive form with validation
   */
  private initializeForm(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, this.ageValidator.bind(this)]],
      about: ['', [Validators.maxLength(500)]]
    });
  }

  /**
   * Custom validator for age (must be at least 13 years old)
   */
  private ageValidator(control: any) {
    if (!control.value) return null;
    
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
     
    }
    
    return age >= 13 ? null : { ageInvalid: true };
  }

  /**
   * Handle form submission
   */
  async onSubmit(): Promise<void> {
    if (this.profileForm.invalid || this.isSubmitting) {
      this.markAllFieldsAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      // Simulate API call
      await this.simulateApiCall();
      
      const profileData: ProfileData = {
        firstName: this.profileForm.value.firstName,
        lastName: this.profileForm.value.lastName,
        gender: this.profileForm.value.gender,
        dateOfBirth: this.profileForm.value.dateOfBirth,
        about: this.profileForm.value.about || ''
      };

      this.formSubmitted.emit(profileData);
      this.showSuccessMessage = true;
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);

      // Reset form after successful submission
      setTimeout(() => {
        this.resetForm();
      }, 2000);

    } catch (error) {
      console.error('Error submitting profile:', error);
      // Handle error - could emit error event or show error message
    } finally {
      this.isSubmitting = false;
    }
  }

  /**
   * Handle back button click
   */
  onBack(): void {
    this.backClicked.emit();
  }

  /**
   * Handle avatar click - cycle through emojis
   */
  onAvatarClick(): void {
    const currentIndex = this.avatarEmojis.indexOf(this.currentAvatar);
    const nextIndex = (currentIndex + 1) % this.avatarEmojis.length;
    this.currentAvatar = this.avatarEmojis[nextIndex];
  }

  /**
   * Mark all form fields as touched to show validation errors
   */
  private markAllFieldsAsTouched(): void {
    Object.keys(this.profileForm.controls).forEach(key => {
      this.profileForm.get(key)?.markAsTouched();
    });
  }

  /**
   * Reset form to initial state
   */
  private resetForm(): void {
    this.profileForm.reset();
    this.currentAvatar = '👤';
    Object.keys(this.profileForm.controls).forEach(key => {
      this.profileForm.get(key)?.markAsUntouched();
    });
  }

  /**
   * Simulate API call delay
   */
  private simulateApiCall(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  /**
   * Get error message for a specific field
   */
  getErrorMessage(fieldName: string): string {
    const field = this.profileForm.get(fieldName);
    if (!field || !field.errors || !field.touched) return '';

    const errors = field.errors;
    
    if (errors['required']) {
      return `${this.getFieldDisplayName(fieldName)} is required`;
    }
    
    if (errors['minlength']) {
      return `${this.getFieldDisplayName(fieldName)} must be at least ${errors['minlength'].requiredLength} characters`;
    }
    
    if (errors['maxlength']) {
      return `${this.getFieldDisplayName(fieldName)} cannot exceed ${errors['maxlength'].requiredLength} characters`;
    }
    
    if (errors['ageInvalid']) {
      return 'You must be at least 13 years old';
    }

    return 'Invalid input';
  }

  /**
   * Get display name for field
   */
  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      firstName: 'First name',
      lastName: 'Last name',
      gender: 'Gender',
      dateOfBirth: 'Date of birth',
      about: 'About'
    };
    
    return displayNames[fieldName] || fieldName;
  }

  /**
   * Check if field has error and should show error styling
   */
  hasError(fieldName: string): boolean {
    const field = this.profileForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  /**
   * Check if field is valid and should show success styling
   */
  isValid(fieldName: string): boolean {
    const field = this.profileForm.get(fieldName);
    return !!(field && field.valid && field.touched && field.value);
  }

  /**
   * Get current form validation status
   */
  get formValidationStatus(): { [key: string]: boolean } {
    return {
      firstName: this.isValid('firstName'),
      lastName: this.isValid('lastName'),
      gender: this.isValid('gender'),
      dateOfBirth: this.isValid('dateOfBirth'),
      about: true // Optional field
    };
  }

  /**
   * Get form completion percentage
   */
  get formCompletionPercentage(): number {
    const requiredFields = ['firstName', 'lastName', 'gender', 'dateOfBirth'];
    const completedFields = requiredFields.filter(field => 
      this.profileForm.get(field)?.valid
    ).length;
    
    return Math.round((completedFields / requiredFields.length) * 100);
  }
}