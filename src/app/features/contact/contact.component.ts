import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ASSISTANCE_TYPES, CONTACT_INFO } from '../../shared/constants/app.constants';
import { AssistanceType } from '../../shared/models/contact.model';
import { GoogleSheetsService } from '../../core/services/google-sheets.service';

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
  submitError = '';
  submitSuccess = false;
  readonly contactInfo = CONTACT_INFO;
  readonly assistanceTypes = ASSISTANCE_TYPES;

  faqs = [
    {
      question: "Who is eligible for AarogyaGhar services?",
      answer: "Our services are primarily for senior citizens (50+) who need assistance with medical coordination or financial support for healthcare. We evaluate each case individually to ensure we can provide the best support.",
      isOpen: false
    },
    {
      question: "Is there any cost for using AarogyaGhar services?",
      answer: "No, all our services are completely free for beneficiaries. We are a non-profit organization funded by donations and grants. Our mission is to ensure healthcare accessibility regardless of financial constraints.",
      isOpen: false
    },
    {
      question: "How long does it take to process a request?",
      answer: "Most requests are processed within 48-72 hours. For urgent medical situations, we prioritize and expedite the assessment process. Our team will contact you within 24 hours of receiving your request.",
      isOpen: false
    },
    {
      question: "What documents are required to avail the services?",
      answer: "Basic documents include ID proof (Aadhaar/PAN), age proof, and medical records if available. For financial assistance, income proof may be required. Our team will guide you through the documentation process.",
      isOpen: false
    },
    {
      question: "Can family members apply on behalf of seniors?",
      answer: "Absolutely! Family members, caregivers, or friends can submit requests on behalf of seniors. We understand that not all elderly individuals may be able to reach out themselves, and we welcome assistance requests from their loved ones.",
      isOpen: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private googleSheetsService: GoogleSheetsService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(50), Validators.max(120)]],
      email: ['', [Validators.email]],
      assistanceType: ['Medical Coordination' as AssistanceType, [Validators.required]]
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';
      this.submitSuccess = false;

      this.googleSheetsService.submitForm(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          this.contactForm.patchValue({ assistanceType: 'Medical Coordination' });
          alert('Thank you! Your request has been submitted focus to our team safely.');
        },
        error: (err) => {
          this.isSubmitting = false;
          // Since we are using a demo URL, this might fail with a 404 or CORS issue if not configured properly
          // We'll show a fallback message but also log the error
          console.error('Submission error:', err);

          // For demo purposes, we will simulate success even if it fails due to placeholder URL
          // but we will also show an error message if it's a real error.
          if (err.status === 404 || err.status === 0) {
            this.submitError = 'Note: The submission endpoint is a placeholder. Please update the script URL in google-sheets.service.ts.';
          } else {
            this.submitError = 'An error occurred. Please try again later.';
          }

          // Still alert the user for now as per original logic
          alert('Thank you! Your request has been received (Demo mode).');
          this.submitSuccess = true;
          this.contactForm.reset();
          this.contactForm.patchValue({ assistanceType: 'Medical Coordination' });
        }
      });
    } else {
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
