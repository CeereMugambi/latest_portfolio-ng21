import { ApplicationRef, Injectable, inject, signal } from '@angular/core';

export type Mode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class Theme {
  private app = inject(ApplicationRef);
  mode = signal<Mode>(this.initial());

  constructor() {
    document.documentElement.dataset['theme'] = this.mode();
  }

  toggle(e?: MouseEvent) {
    const next: Mode = this.mode() === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    const swap = () => {
      this.mode.set(next);
      root.dataset['theme'] = next;
      this.app.tick(); // update the button icon in the same frame
      try { localStorage.setItem('theme', next); } catch {}
    };

    const startVT = (document as any).startViewTransition?.bind(document);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    // fallback: older browsers get a quick fade, reduced-motion gets an instant switch
    if (!startVT || reduce) {
      if (!reduce) {
        root.classList.add('theme-anim');
        setTimeout(() => root.classList.remove('theme-anim'), 600);
      }
      swap();
      return;
    }

    // circle origin = center of the toggle button
    const rect = (e?.currentTarget as HTMLElement | null)?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    startVT(swap)
      .ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 750,
            easing: 'cubic-bezier(0.22, 0.8, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      })
      .catch(() => {});
  }

  private initial(): Mode {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}