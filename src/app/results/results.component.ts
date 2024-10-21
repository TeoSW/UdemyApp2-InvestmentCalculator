import { Component, Input } from '@angular/core';
import { Result } from '../interfaces.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {

@Input() results?: Result[];

}
