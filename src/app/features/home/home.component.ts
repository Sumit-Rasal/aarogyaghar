import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { STATS } from '../../shared/constants/app.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly stats = STATS;

  testimonials = [
    {
      quote: "When my children moved abroad and I fell ill, I had no one to turn to. AarogyaGhar became my family — they took care of everything, from hospital visits to medicines. I am forever grateful.",
      name: "Kamala Devi",
      role: "Beneficiary, Age 72",
      avatar: "KD"
    },
    {
      quote: "My father was living alone and couldn't afford his heart medication. AarogyaGhar not only arranged free treatment but also checked on him regularly. They truly care.",
      name: "Rajesh Kumar",
      role: "Son of beneficiary",
      avatar: "RK"
    },
    {
      quote: "I never thought anyone would help an old woman like me. These people came to my doorstep and changed my life. They are doing God's work.",
      name: "Savitri Bai",
      role: "Beneficiary, Age 78",
      avatar: "SB"
    }
  ];

  processSteps = [
    {
      step: 1,
      title: "Reach Out to Us",
      description: "Call us, send a message, or fill our form. Tell us about yourself or a senior who needs help — we're always listening.",
      icon: "phone"
    },
    {
      step: 2,
      title: "We Assess & Plan",
      description: "Our volunteers visit and understand the situation. We create a personalized care plan based on their needs.",
      icon: "clipboard"
    },
    {
      step: 3,
      title: "Care & Support",
      description: "We coordinate medical visits, provide financial aid for treatment, and offer ongoing emotional support.",
      icon: "heart"
    }
  ];

  trustBadges = [
    {
      title: "Est. 2026",
      description: "Serving with dedication",
      icon: "calendar"
    },
    {
      title: "100% Free",
      description: "No charges ever",
      icon: "gift"
    },
    {
      title: "Verified Care",
      description: "Trusted by families",
      icon: "shield"
    },
    {
      title: "Always Available",
      description: "We're here for you",
      icon: "clock"
    }
  ];


}
