import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPhotoComponent } from './display-photo.component';

describe('DisplayPhotoComponent', () => {
  let component: DisplayPhotoComponent;
  let fixture: ComponentFixture<DisplayPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPhotoComponent]
    });
    fixture = TestBed.createComponent(DisplayPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
