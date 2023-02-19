import { Component } from '@angular/core';
import { CareerobjectiveService } from 'src/app/services/careerobjective.service';
import { CareerObjective } from 'src/app/shared/models/CareerObjective';
import { Route, Router} from '@angular/router';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective-page.component.html',
  styleUrls: ['./career-objective-page.component.css']
})
export class CareerObjectivePageComponent {
  careerObjectives:CareerObjective[] = [];
  constructor(public careerObjectiveService:CareerobjectiveService,
      private router:Router
    ) {
    this.careerObjectives = this.careerObjectiveService.getAll();
  }

  addNew() {
    this.router.navigateByUrl('/career/new');
  }

  deleteRow(rowId:number) {
    const requiredIndex = this.careerObjectives.findIndex(el => {
      return el.id === rowId;
    });
    if (requiredIndex === -1) {
      return false;
    }
    let updateCareerObjectives = this.careerObjectives.splice(requiredIndex,1);
    this.setCareerObjectiveToLocalStorage(updateCareerObjectives);
    return this.careerObjectives = updateCareerObjectives;
  }

  private setCareerObjectiveToLocalStorage(json:any) {

    localStorage.setItem('Career_Objective',JSON.stringify(json));
  }
}
