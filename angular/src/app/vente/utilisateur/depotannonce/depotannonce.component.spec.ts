import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotannonceComponent } from './depotannonce.component';

describe('DepotannonceComponent', () => {
  let component: DepotannonceComponent;
  let fixture: ComponentFixture<DepotannonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotannonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
