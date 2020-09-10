import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosoaComponent } from './iniciosoa.component';

describe('IniciosoaComponent', () => {
  let component: IniciosoaComponent;
  let fixture: ComponentFixture<IniciosoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciosoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciosoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
