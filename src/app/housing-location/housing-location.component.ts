import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;
}
