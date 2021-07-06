import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatitemComponent } from './catitem.component';

describe('CatitemComponent', () => {
  let component: CatitemComponent;
  let fixture: ComponentFixture<CatitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
