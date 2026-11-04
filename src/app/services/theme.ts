import { Injectable, signal } from '@angular/core';

export type Mode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class Theme {
  mode = signal<Mode>(this.initial());

  constructor() {
    this.apply(this.mode(), false);
  }

  toggle() {
    const next: Mode = this.mode() === 'dark' ? 'light' : 'dark';
    this.mode.set(next);
    this.apply(next, true);
    try { localStorage.setItem('theme', next); } catch {}
  }

  private initial(): Mode {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  private apply(mode: Mode, animate: boolean) {
    const root = document.documentElement;
    if (animate) {
      root.classList.add('theme-anim');
      setTimeout(() => root.classList.remove('theme-anim'), 600);
    }
    root.dataset['theme'] = mode;
  }
}