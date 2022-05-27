import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeduComponent } from './expedu.component';

describe('ExpeduComponent', () => {
  let component: ExpeduComponent;
  let fixture: ComponentFixture<ExpeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
