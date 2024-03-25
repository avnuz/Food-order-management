import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodListComponent } from './user-food-list.component';

describe('UserFoodListComponent', () => {
  let component: UserFoodListComponent;
  let fixture: ComponentFixture<UserFoodListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFoodListComponent]
    });
    fixture = TestBed.createComponent(UserFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
