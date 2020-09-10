import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarActividadesComponent } from './var-actividades.component';

describe('VarActividadesComponent', () => {
  let component: VarActividadesComponent;
  let fixture: ComponentFixture<VarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
