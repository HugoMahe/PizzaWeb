import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonConnecteComponent } from './non-connecte.component';

describe('NonConnecteComponent', () => {
  let component: NonConnecteComponent;
  let fixture: ComponentFixture<NonConnecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonConnecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonConnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
