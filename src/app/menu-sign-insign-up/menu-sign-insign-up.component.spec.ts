import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSignInsignUpComponent } from './menu-sign-insign-up.component';

describe('MenuSignInsignUpComponent', () => {
  let component: MenuSignInsignUpComponent;
  let fixture: ComponentFixture<MenuSignInsignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSignInsignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSignInsignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
