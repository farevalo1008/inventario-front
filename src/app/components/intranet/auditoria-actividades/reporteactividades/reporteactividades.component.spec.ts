import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteactividadesComponent } from './reporteactividades.component';

describe('ReporteactividadesComponent', () => {
  let component: ReporteactividadesComponent;
  let fixture: ComponentFixture<ReporteactividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteactividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteactividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
