import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgvehiculeComponent } from './imgvehicule.component';

describe('ImgvehiculeComponent', () => {
  let component: ImgvehiculeComponent;
  let fixture: ComponentFixture<ImgvehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgvehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgvehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
