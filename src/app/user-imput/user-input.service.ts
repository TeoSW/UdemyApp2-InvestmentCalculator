import { Injectable } from '@angular/core';

type Investment = {
  initial: string; 
  annual: string; 
  roi: string; 
  duration: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor() { }

  investment: Investment[] = [];

  addInvestment(investmentData: { initial: number; annual: number; roi: number; duration: number; }) {
    this.investment.push({
      initial: investmentData.initial.toString(),
      annual: investmentData.annual.toString(),
      roi: investmentData.roi.toString(),
      duration: investmentData.duration.toString()
    });
  }

}
