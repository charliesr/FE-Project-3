import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuotationComponent } from './single-quotation.component';

describe('SingleQuotationComponent', () => {
  let component: SingleQuotationComponent;
  let fixture: ComponentFixture<SingleQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
