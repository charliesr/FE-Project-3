import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuotComponent } from './form-quot.component';

describe('FormQuotComponent', () => {
  let component: FormQuotComponent;
  let fixture: ComponentFixture<FormQuotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormQuotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
