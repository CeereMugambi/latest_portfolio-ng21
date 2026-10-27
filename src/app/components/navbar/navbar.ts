import { Component, AfterViewInit, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit, OnDestroy {
  open = signal(false);
  scrolled = signal(false);
  active = signal('home');

  links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  private io?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  ngAfterViewInit() {
    this.io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    this.links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) this.io!.observe(el);
    });
  }

  go(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.open.set(false);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}