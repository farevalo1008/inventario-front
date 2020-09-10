import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosInternosComponent } from './recursos-internos.component';

describe('RecursosInternosComponent', () => {
  let component: RecursosInternosComponent;
  let fixture: ComponentFixture<RecursosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
