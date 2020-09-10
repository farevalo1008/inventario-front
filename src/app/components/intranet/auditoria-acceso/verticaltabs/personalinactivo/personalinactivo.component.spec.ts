import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinactivoComponent } from './personalinactivo.component';

describe('PersonalinactivoComponent', () => {
  let component: PersonalinactivoComponent;
  let fixture: ComponentFixture<PersonalinactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalinactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalinactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
