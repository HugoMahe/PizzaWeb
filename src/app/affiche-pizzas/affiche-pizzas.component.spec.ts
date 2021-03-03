import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePizzasComponent } from './affiche-pizzas.component';

describe('AffichePizzasComponent', () => {
  let component: AffichePizzasComponent;
  let fixture: ComponentFixture<AffichePizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichePizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
