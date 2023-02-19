import { Injectable } from '@angular/core';
import { sample_careers } from 'src/data';
import { CareerObjective } from '../shared/models/CareerObjective';

@Injectable({
  providedIn: 'root'
})
export class CareerobjectiveService {

  constructor() { }

  getAll():any[] {
    return this.getCareerObjectiveFromLocalStorage();
  }

  getById(objectiveId:number) {
    let careerObjectives = this.getCareerObjectiveFromLocalStorage();
    console.log(careerObjectives);
    if (careerObjectives) {
      return  careerObjectives.find((item) => item.id == objectiveId) as CareerObjective;
    }

    return new CareerObjective();
  }

  private getCareerObjectiveFromLocalStorage():any[] {
    const careerObjectiveJson = localStorage.getItem('Career_Objective');
    if (careerObjectiveJson) return JSON.parse(careerObjectiveJson);
    let careerObjective = [];
    return careerObjective = [];
  }
}
