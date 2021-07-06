import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturevideoComponent } from './featurevideo.component';

describe('FeaturevideoComponent', () => {
  let component: FeaturevideoComponent;
  let fixture: ComponentFixture<FeaturevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
