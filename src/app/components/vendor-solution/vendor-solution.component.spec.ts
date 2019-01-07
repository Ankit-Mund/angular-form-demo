import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSolutionComponent } from './vendor-solution.component';

describe('VendorSolutionComponent', () => {
  let component: VendorSolutionComponent;
  let fixture: ComponentFixture<VendorSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
