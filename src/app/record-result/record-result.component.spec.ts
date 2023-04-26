import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordResultComponent } from './record-result.component';

describe('RecordResultComponent', () => {
  let component: RecordResultComponent;
  let fixture: ComponentFixture<RecordResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
