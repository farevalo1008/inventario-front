import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboPagoComponent } from './recibo-pago.component';

describe('ReciboPagoComponent', () => {
  let component: ReciboPagoComponent;
  let fixture: ComponentFixture<ReciboPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
