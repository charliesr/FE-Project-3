import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormFoodComponent } from './new-form-food.component';

describe('NewFormFoodComponent', () => {
  let component: NewFormFoodComponent;
  let fixture: ComponentFixture<NewFormFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
