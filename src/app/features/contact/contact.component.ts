import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ASSISTANCE_TYPES, CONTACT_INFO } from '../../shared/constants/app.constants';
import { AssistanceType } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  readonly contactInfo = CONTACT_INFO;
  readonly assistanceTypes = ASSISTANCE_TYPES;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(50), Validators.max(120)]],
      email: ['', [Validators.email]],
      assistanceType: ['Medical Coordination' as AssistanceType, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // TODO: Implement form submission logic
      console.log('Form submitted:', this.contactForm.value);
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
        this.contactForm.patchValue({ assistanceType: 'Medical Coordination' });
        alert('Thank you! Your request has been submitted.');
      }, 1000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      return 'Phone number must be at least 10 digits';
    }
    if (control?.hasError('min')) {
      return 'Services are primarily for seniors (50+)';
    }
    if (control?.hasError('max')) {
      return 'Please enter a valid age';
    }
    return '';
  }
}
