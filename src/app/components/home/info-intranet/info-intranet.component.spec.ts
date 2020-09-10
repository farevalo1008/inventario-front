import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIntranetComponent } from './info-intranet.component';

describe('InfoIntranetComponent', () => {
  let component: InfoIntranetComponent;
  let fixture: ComponentFixture<InfoIntranetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoIntranetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIntranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
