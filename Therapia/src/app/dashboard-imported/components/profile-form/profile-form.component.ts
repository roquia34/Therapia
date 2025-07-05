import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  profileForm: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;


  name: string = '';
  email: string = '';
  bio: string = '';
  message: string = '';

  submitted = false;

  submit() {
    if (this.name && this.email && this.bio) {
      const formData = {
        name: this.name,
        email: this.email,
        bio: this.bio,
        message: this.message
      };
      console.log('📤 Form Submitted:', formData);
      this.submitted = true;
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields.');
    }
  }

  clear() {
    this.name = '';
    this.email = '';
    this.bio = '';
    this.message = '';
    this.submitted = false;
  }

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      image: [null],
      name: ['', Validators.required],
      gender: [''],
      city: [''],
      yearsOfExperience: [''],
      specialized: [''],
      faculty: [''],
      certificates: [''],
      address: [''],
      about: [''],
      facebook: [''],
      linkedin: ['']
    });
  }



  onSubmit() {
    console.log(this.profileForm.value);
  }

  onBack() {
    console.log('Going back...');
  }
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
