import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodCompanyComponent } from './list-food-company.component';

describe('ListFoodCompanyComponent', () => {
  let component: ListFoodCompanyComponent;
  let fixture: ComponentFixture<ListFoodCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoodCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
