import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalactivoComponent } from './personalactivo.component';

describe('PersonalactivoComponent', () => {
  let component: PersonalactivoComponent;
  let fixture: ComponentFixture<PersonalactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
