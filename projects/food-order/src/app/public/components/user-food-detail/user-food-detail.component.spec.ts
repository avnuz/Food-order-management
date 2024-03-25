import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodDetailComponent } from './user-food-detail.component';

describe('UserFoodDetailComponent', () => {
  let component: UserFoodDetailComponent;
  let fixture: ComponentFixture<UserFoodDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFoodDetailComponent]
    });
    fixture = TestBed.createComponent(UserFoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
