import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Projects } from './pages/projects/projects';``

@Component({
  selector: 'app-root',
  imports: [ Navbar,Home,About,Projects,Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
