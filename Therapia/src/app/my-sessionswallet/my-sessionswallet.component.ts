import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sessionswallet',
  templateUrl: './my-sessionswallet.component.html',
  styleUrls: ['./my-sessionswallet.component.scss'],
})

export class MySessionswalletComponent{
   modernForm: FormGroup;
  isLoading = false;
  showSuccessMessage = false;
  showErrorMessage = false;
  selectedFile: File | null = null;

  progressSteps = [
    { step: 1, active: true, completed: false },
    { step: 2, active: false, completed: false },
    { step: 3, active: false, completed: false },
  ];

  constructor(private fb: FormBuilder) {
    this.modernForm = this.fb.group({
      sessionId: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]+$')]],
      cost: [null, [Validators.required, Validators.min(0)]],
      discountCode: ['', [Validators.pattern('^[A-Z0-9]{3,10}$')]],
    });
  }

  // ------------------ Validation Helpers ------------------
  isFieldValid(field: string): boolean {
    const control = this.modernForm.get(field);
    return !!control && control.valid && (control.dirty || control.touched);
  }

  isFieldInvalid(field: string): boolean {
    const control = this.modernForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  getFieldError(field: string): string | null {
    const control = this.modernForm.get(field);
    if (control && control.errors) {
      if (control.errors['required']) {
        return 'This field is required';
      }
      if (control.errors['min']) {
        return `Minimum value is ${control.errors['min'].min}`;
      }
      if (control.errors['pattern']) {
        return 'Invalid format';
      }
    }
    return null;
  }

  // ------------------ File Upload ------------------
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.selectedFile = event.dataTransfer.files[0];
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
  }

  // ------------------ Submit & Clear ------------------
  onSubmit(): void {
    if (this.modernForm.invalid) {
      this.showErrorMessage = true;
      setTimeout(() => (this.showErrorMessage = false), 3000);
      return;
    }

    this.isLoading = true;

    // Simulate async submission (e.g., API call)
    setTimeout(() => {
      this.isLoading = false;
      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      // reset form and states
      this.modernForm.reset();
      this.selectedFile = null;

      setTimeout(() => (this.showSuccessMessage = false), 3000);
    }, 2000);
  }

  onClear(): void {
    this.modernForm.reset();
    this.selectedFile = null;
  }

  // ------------------ Progress Stepper ------------------
  goToStep(index: number): void {
    this.progressSteps.forEach((step, i) => {
      step.active = i === index;
      step.completed = i < index;
    });
  }
}
