import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestopComponent } from './destop.component';

describe('DestopComponent', () => {
  let component: DestopComponent;
  let fixture: ComponentFixture<DestopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
