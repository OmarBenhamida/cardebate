import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsversionComponent } from './detailsversion.component';

describe('DetailsversionComponent', () => {
  let component: DetailsversionComponent;
  let fixture: ComponentFixture<DetailsversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
