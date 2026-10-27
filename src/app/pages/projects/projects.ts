import { Component, signal } from '@angular/core';
import { Flip } from '../../directives/flip';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [Flip],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = projects;
  index = signal<Record<string, number>>({});
  aboutOpen = signal<string | null>(null);
  private drag = { active: false, x: 0, left: 0 };

  techs(t: string) { return t.split(',').map((s) => s.trim()).filter(Boolean); }
  host(url: string) { try { return new URL(url).host; } catch { return url; } }
  pad(n: number) { return String(n).padStart(2, '0'); }
  idx(id: string) { return this.index()[id] ?? 0; }

  onScroll(id: string, el: HTMLElement) {
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== this.idx(id)) this.index.update((m) => ({ ...m, [id]: i }));
  }

  step(el: HTMLElement, dir: number) {
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  }

  // mouse drag (touch swiping works natively)
  down(e: PointerEvent, el: HTMLElement) {
    if (e.pointerType !== 'mouse') return;
    this.drag = { active: true, x: e.clientX, left: el.scrollLeft };
    el.classList.add('dragging');
    el.setPointerCapture(e.pointerId);
  }

  move(e: PointerEvent, el: HTMLElement) {
    if (!this.drag.active) return;
    el.scrollLeft = this.drag.left - (e.clientX - this.drag.x);
  }

  up(el: HTMLElement) {
    if (!this.drag.active) return;
    this.drag.active = false;
    el.classList.remove('dragging');
    el.scrollTo({ left: Math.round(el.scrollLeft / el.clientWidth) * el.clientWidth, behavior: 'smooth' });
  }

  toggleAbout(id: string) {
    this.aboutOpen.set(this.aboutOpen() === id ? null : id);
  }
}