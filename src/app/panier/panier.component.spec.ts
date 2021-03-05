import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierComponent } from './panier.component';

describe('PanierComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[PanierComponent],
    })
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.totalAPayer.toString());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
