import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFoodCompanyComponent } from './profile-food-company.component';

describe('ProfileFoodCompanyComponent', () => {
  let component: ProfileFoodCompanyComponent;
  let fixture: ComponentFixture<ProfileFoodCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFoodCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFoodCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
