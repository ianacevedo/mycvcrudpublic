import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CareerobjectiveService } from 'src/app/services/careerobjective.service';
import { CareerObjective } from 'src/app/shared/models/CareerObjective';

const CAREER_OBJECTIVE_KEY = 'Career_Objective';
const VALIDATORS_MESSAGES:any = {
  required: 'Should not be empty'
}
@Component({
  selector: 'app-career-objective-edit',
  templateUrl: './career-objective-edit.component.html',
  styleUrls: ['./career-objective-edit.component.css']
})
export class CareerObjectiveEditComponent implements OnInit, OnChanges {
  @Input()
  control!:AbstractControl;
  @Input()
  type: 'text' | undefined;
  careerObjectiveForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';
  showErrorsWhen:boolean = true;
  errorMessages:string[] = [];

  constructor(private formBuilder:FormBuilder,
    private careerObjectiveService:CareerobjectiveService,
    private activatedRoute:ActivatedRoute,
    private router:Router

    ) {

      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    }
    ngOnInit(): void {
      this.careerObjectiveForm = this.formBuilder.group({
        name: ['',Validators.required],
        description: ['',Validators.required],
        targetDate: ['',Validators.required],
        completedDate: ['',Validators.required]
      });

    }

    ngOnChanges(changes: SimpleChanges): void {
      this.checkValidation();
    }

    checkValidation():void {
      const errors = this.control.errors;
      if(!errors) {
        this.errorMessages = [];
        return;
      }

      const errorKeys = Object.keys(errors);
      this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
    }


    get formControl() {
      return this.careerObjectiveForm.controls;
    }

    save() {
      this.isSubmitted = true;
      if (this.careerObjectiveForm.invalid) return;
      const careerObjectiveJson = localStorage.getItem(CAREER_OBJECTIVE_KEY);
      let careerObjectives:any[] = [];
      let idx = 1;
      if (careerObjectiveJson) {
        careerObjectives = JSON.parse(careerObjectiveJson);
        let sortedCareerObjectives = careerObjectives.slice().sort((a,b) => b.id - a.id);
        idx = parseInt(sortedCareerObjectives[0].id) + 1;
      }
      careerObjectives.push({
        id: idx,
        name: this.formControl['name'].value,
        description: this.formControl['description'].value,
        targetDate: this.formControl['targetDate'].value,
        completedDate: this.formControl['completedDate'].value,
      });
      this.setCareerObjectiveToLocalStorage(careerObjectives);
      this.router.navigateByUrl('/career');
    }

    private setCareerObjectiveToLocalStorage(json:any) {

      localStorage.setItem(CAREER_OBJECTIVE_KEY,JSON.stringify(json));
    }
}
