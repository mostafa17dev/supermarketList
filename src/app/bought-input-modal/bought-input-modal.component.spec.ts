import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtInputModalComponent } from './bought-input-modal.component';

describe('BoughtInputModalComponent', () => {
  let component: BoughtInputModalComponent;
  let fixture: ComponentFixture<BoughtInputModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoughtInputModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoughtInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
