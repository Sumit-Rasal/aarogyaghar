import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'Our Services', path: '/services' },
        { label: 'About Us', path: '/about' },
        { label: 'Get Help', path: '/contact' }
    ];

    contactInfo = {
        phone: '+91 98765 43210',
        email: 'care@aarogyaghar.org',
        address: 'Mumbai, Maharashtra, India'
    };

    socialLinks = [
        { name: 'Facebook', icon: 'facebook', url: '#' },
        { name: 'Twitter', icon: 'twitter', url: '#' },
        { name: 'Instagram', icon: 'instagram', url: '#' },
        { name: 'LinkedIn', icon: 'linkedin', url: '#' }
    ];

    constructor(private router: Router) { }

    navigateAndScrollTop(path: string): void {
        this.router.navigate([path]).then(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
