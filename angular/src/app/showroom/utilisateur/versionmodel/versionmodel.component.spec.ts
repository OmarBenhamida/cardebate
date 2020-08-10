import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionmodelComponent } from './versionmodel.component';

describe('VersionmodelComponent', () => {
  let component: VersionmodelComponent;
  let fixture: ComponentFixture<VersionmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
