import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillingPageComponent } from './user-billing-page.component';

describe('UserBillingPageComponent', () => {
  let component: UserBillingPageComponent;
  let fixture: ComponentFixture<UserBillingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBillingPageComponent]
    });
    fixture = TestBed.createComponent(UserBillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
