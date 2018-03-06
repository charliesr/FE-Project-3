import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackPriceComponent } from './pack-price.component';

describe('PackPriceComponent', () => {
  let component: PackPriceComponent;
  let fixture: ComponentFixture<PackPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
