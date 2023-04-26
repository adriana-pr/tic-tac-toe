import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPlayComponent } from './field-play.component';

describe('FieldPlayComponent', () => {
  let component: FieldPlayComponent;
  let fixture: ComponentFixture<FieldPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldPlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
