import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatitemfooterComponent } from './catitemfooter.component';

describe('CatitemfooterComponent', () => {
  let component: CatitemfooterComponent;
  let fixture: ComponentFixture<CatitemfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatitemfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatitemfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
