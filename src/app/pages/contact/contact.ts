import { Component } from '@angular/core';
import { Flip } from '../../directives/flip';

@Component({
  selector: 'app-contact',
  imports: [Flip],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  year = new Date().getFullYear();

  channels = [
    { icon: '✉️', label: 'Email', value: 'ceeremugambi@gmail.com', href: 'mailto:ceeremugambi@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/janetceere', href: 'https://linkedin.com/in/janetceere' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/CeereMugambi', href: 'https://github.com/CeereMugambi' },
  ];

  send(e: Event, name: string, email: string, message: string) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
    window.location.href = `mailto:ceeremugambi@gmail.com?subject=${subject}&body=${body}`;
  }
}