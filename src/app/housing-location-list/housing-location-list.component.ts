import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location-list.component.css'
})
export class HousingLocationListComponent {
  @Input() housingLocation!: HousingLocation;
}
