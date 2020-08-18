/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BtnYellowComponent } from './btn-yellow.component';

describe('BtnYellowComponent', () => {
  let component: BtnYellowComponent;
  let fixture: ComponentFixture<BtnYellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnYellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
