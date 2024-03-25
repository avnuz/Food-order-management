import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Output() foodDeleted = new EventEmitter<void>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private foodService: FoodService
  ) {}

  deleteFood() {
    const foodId = this.data.foodId;
    console.log(foodId);
    this.foodService.deleteFoodDetails(foodId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.foodDeleted.emit();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
