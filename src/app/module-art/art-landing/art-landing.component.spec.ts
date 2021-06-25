import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtLandingComponent } from './art-landing.component';

describe('ArtLandingComponent', () => {
  let component: ArtLandingComponent;
  let fixture: ComponentFixture<ArtLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
