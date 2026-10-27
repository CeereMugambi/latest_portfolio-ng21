import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({ selector: '[appFlip]' })
export class Flip implements OnInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngOnInit() {
    this.el.classList.add('flip');
    this.io = new IntersectionObserver(
      ([e]) => this.el.classList.toggle('flip-in', e.isIntersecting),
      { rootMargin: '0px 0px -15% 0px' }
    );
    this.io.observe(this.el);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}