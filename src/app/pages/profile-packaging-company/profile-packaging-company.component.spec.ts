import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePackagingCompanyComponent } from './profile-packaging-company.component';

describe('ProfilePackagingCompanyComponent', () => {
  let component: ProfilePackagingCompanyComponent;
  let fixture: ComponentFixture<ProfilePackagingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePackagingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePackagingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
