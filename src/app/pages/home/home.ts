import { Component, ElementRef, HostListener, OnDestroy, AfterViewInit, ViewChild, inject } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('typed') typedEl!: ElementRef<HTMLSpanElement>;
  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private typed?: Typed;

  stats = [
    { value: '5+', label: 'Years building' },
    { value: '20+', label: 'Projects shipped' },
    { value: '∞', label: 'Curiosity' },
  ];

  tech = ['Angular', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes', 'Azure', 'Jest', 'Figma', 'Agentic AI'];

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent) {
    const el = this.host.nativeElement;
    el.style.setProperty('--mx', `${e.clientX}px`);
    el.style.setProperty('--my', `${e.clientY}px`);
  }

  ngAfterViewInit() {
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: ['Full-Stack Developer', 'Angular & React Engineer', 'Agentic Coding Enthusiast', 'Future Financial Engineer'],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}