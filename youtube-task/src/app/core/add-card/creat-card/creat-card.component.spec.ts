import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCardComponent } from './creat-card.component';

describe('CreatCardComponent', () => {
  let component: CreatCardComponent;
  let fixture: ComponentFixture<CreatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
