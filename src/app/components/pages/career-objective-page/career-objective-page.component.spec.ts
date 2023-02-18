import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerObjectivePageComponent } from './career-objective-page.component';

describe('CareerObjectivePageComponent', () => {
  let component: CareerObjectivePageComponent;
  let fixture: ComponentFixture<CareerObjectivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerObjectivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerObjectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
