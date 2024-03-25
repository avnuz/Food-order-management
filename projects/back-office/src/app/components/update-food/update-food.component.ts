import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../shared/food.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.scss'],
})
export class UpdateFoodComponent implements OnInit {
  foodId: string | null = '';
  foodDetails: any = [];
  isVeg: boolean = false;
  isNonVeg: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  @ViewChild('adminAddFood') adminAddFoodForm!: NgForm;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodServices: FoodService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.foodId = this.activatedRoute.snapshot.paramMap.get('foodId');

    console.log('update food details:: ', this.foodId);
    this.foodServices.getFoodDetailsById(this.foodId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.foodDetails = response;
        console.log('fooddetails::', this.foodDetails);
        this.isVeg = this.foodDetails[0]?.veg;
        this.isNonVeg = this.foodDetails[0]?.nonveg;
        // Uncomment this part if you want to handle image preview
        // if (this.foodDetails[0]?.image) {
        //   this.selectedFile = new File(
        //     [this.foodDetails[0].image],
        //     this.foodDetails[0]?.imagename
        //   );
        //   this.readImagePreview(this.selectedFile);
        // }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      this.readImagePreview(this.selectedFile); // Update the image preview
    }
  }

  readImagePreview(file: File | null) {
    if (file) {
      console.log('file');
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        console.log(this.imagePreview);
      };
      reader.onerror = (error) => {
        console.error('File reading failed:', error);
      };
      reader.readAsDataURL(file);
    } else {
      console.error('No file provided for image preview.');
    }
  }

  toggleFoodType(e: any) {
    if (this.isVeg && this.isNonVeg) {
      // If both are selected, deselect the one that was clicked
      if (e.target.id === 'veg') {
        this.isNonVeg = false;
      } else if (e.target.id === 'nonveg') {
        this.isVeg = false;
      }
    }
  }

  editFood(data: any) {
    if (this.adminAddFoodForm.invalid) {
      console.log(' form is invalid !');
      return;
    }
    if (!this.selectedFile && !this.imagePreview) {
      data['id'] = this.foodDetails[0].id;
      data['imagename'] = this.foodDetails[0].imagename;
      data['image'] = this.foodDetails[0].image;
      this.foodServices.updateFoodDetails(data).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
      this.route.navigate(['/home']);
    } else {
      data['id'] = this.foodDetails[0].id;
      data['imagename'] = this.selectedFile?.name;
      data['image'] = this.imagePreview;
      this.foodServices.updateFoodDetails(data).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
      this.route.navigate(['/home']);
    }
  }
}

