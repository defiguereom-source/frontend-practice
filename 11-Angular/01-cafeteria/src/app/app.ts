import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './shared/footer/footer'
import {Header} from './shared/header/header'
import {Home} from './features/home/home'
import { Landing } from './features/landing/landing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home , Landing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('01-cafeteria');
}
