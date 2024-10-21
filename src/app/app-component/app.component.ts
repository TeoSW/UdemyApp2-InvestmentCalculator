import { Component, Output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { UserImputComponent } from "../user-imput/user-imput.component";
import { ResultsComponent } from "../results/results.component";
import { Data, Result } from "../interfaces.model";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserImputComponent,
    ResultsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "udemyApp-2-InvestmentCalculator";

  resultsData?: Result[];

  onCalculateInvestmentResults(data: Data) {
    const annualData = [];

    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    //* { atribute } = data => destructuram obiectul data din parametru ca sa folosim atributele acestuaia

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
