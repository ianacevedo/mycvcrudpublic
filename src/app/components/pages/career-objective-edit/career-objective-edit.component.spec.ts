import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerObjectiveEditComponent } from './career-objective-edit.component';

describe('CareerObjectiveEditComponent', () => {
  let component: CareerObjectiveEditComponent;
  let fixture: ComponentFixture<CareerObjectiveEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerObjectiveEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerObjectiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
