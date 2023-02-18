import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerObjectiveNewComponent } from './career-objective-new.component';

describe('CareerObjectiveNewComponent', () => {
  let component: CareerObjectiveNewComponent;
  let fixture: ComponentFixture<CareerObjectiveNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerObjectiveNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerObjectiveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
