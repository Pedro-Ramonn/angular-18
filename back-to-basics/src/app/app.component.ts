import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HomeComponent } from './components/home/home.component';
import { SportComponent } from './components/sport/sport.component';
import { WorkComponent } from './components/work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     CommonModule,
     RouterOutlet,
     HobbiesComponent,
     HomeComponent, 
     SportComponent, 
     WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portifolio';
}
