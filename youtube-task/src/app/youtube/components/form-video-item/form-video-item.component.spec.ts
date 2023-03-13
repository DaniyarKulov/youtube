import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideoItemComponent } from './form-video-item.component';

describe('FormVideoItemComponent', () => {
  let component: FormVideoItemComponent;
  let fixture: ComponentFixture<FormVideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVideoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
