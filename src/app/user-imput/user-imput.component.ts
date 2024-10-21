import { EventEmitter, Component, Input, Output, signal } from '@angular/core';
import { UserInputService } from './user-input.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app-component/app.component';
import { ButtonResultsService } from './button-results.service';
import { Data } from '../interfaces.model';

@Component({
  selector: 'app-user-imput',
  standalone: true,
  imports: [FormsModule, AppComponent],
  templateUrl: './user-imput.component.html',
  styleUrl: './user-imput.component.scss'
})
export class UserImputComponent {

  @Output() calculate = new EventEmitter<Data>();
  //! comunnicate from child (user-input-component) to parent (app--component)
  
  //* sau: calculate = oputput()

  constructor(private userInputService: UserInputService,
              private buttonResultsService: ButtonResultsService,
              ) { }

  enteredInitial: number = 0;
  enteredAnnual: number = 0;
  enteredROI: number = 5;
  enteredDuration: number = 10;

  isButtonDisabled: boolean = false;

  onSubmit() {
    // this.userInputService.addInvestment({
    //   initial: this.enteredInitial,
    //   annual: this.enteredAnnual,
    //   roi: this.enteredROI,
    //   duration: this.enteredDuration
    // });

    this.calculate.emit({
      initialInvestment: + this.enteredInitial, //* + transforma in number
      duration: + this.enteredDuration,
      expectedReturn: + this.enteredROI,
      annualInvestment: + this.enteredAnnual
    })

    console.log("initial: ", this.enteredInitial);
    console.log("annual: ", this.enteredAnnual);
    console.log("roi: ", this.enteredROI);
    console.log("duration: ", this.enteredDuration);

    this.isButtonDisabled = true;
  }

  onClick() {
    this.buttonResultsService.buttonClicked = true;
  }
}