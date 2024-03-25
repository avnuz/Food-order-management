import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FoodService } from '../../shared/food.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss'],
})
export class ListFoodComponent implements OnInit, AfterViewInit {
  food_data: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'action'];
  dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private foodService: FoodService,
    private route: Router,
    public dialog: MatDialog
  ) {}
  openDialog(foodId: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {foodId: foodId
        /* Optional data to pass to the dialog component */
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
    dialogRef.componentInstance.foodDeleted.subscribe(() => {
      // Refresh the list of food items after deletion
      this.getFoodDetails();
    });

  }

  ngOnInit(): void {
    this.getFoodDetails(); // Fetch data when component initializes
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getFoodDetails() {
    this.foodService.getFoodDetails().subscribe({
      next: (response: any) => {
        this.food_data = response; // Assign fetched data to food_data
        this.dataSource.data = this.food_data; // Set the data source
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  editFood(data: any) {
    console.log(data);
    this.route.navigate([`update-food/${data}`]);
  }

  gotToAdd() {
    this.route.navigate(['/add-food']);
  }
}
