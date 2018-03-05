import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPackagingCompanyComponent } from './list-packaging-company.component';

describe('ListPackagingCompanyComponent', () => {
  let component: ListPackagingCompanyComponent;
  let fixture: ComponentFixture<ListPackagingCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPackagingCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPackagingCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
