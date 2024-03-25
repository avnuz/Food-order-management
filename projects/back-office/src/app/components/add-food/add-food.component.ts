import { Component, ViewChild } from '@angular/core';
import { FoodService } from '../../shared/food.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from '../../app.module';


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent {
  isVeg: boolean = false;
  isNonVeg: boolean = false;
  selectedFile: File[] = [];
  imagePreview: string | ArrayBuffer | null = null;

  @ViewChild('adminAddFood') adminAddFoodForm!: NgForm;
  constructor(private foodservices: FoodService, private route: Router) {}
  ngOnInit(): void {}
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
  onFileSelected(e: any) {
    console.log('entered');
    const file: File = e.target.files[0];

    this.selectedFile[0] = e.target.files[0] as File;
    console.log(this.selectedFile);
    // Display image preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(this.imagePreview)
    };
    reader.readAsDataURL(file);
  }
  addFood(data: any) {
    // if (this.adminAddFoodForm.invalid) {
    //   console.log(' form is invalid !');
    //   return;
    // }

    data['imagename'] = this.selectedFile[0]?.name;
    data.image=this.imagePreview;
    console.log("image:::", data.image)

    this.foodservices.addFoodDetails(data).subscribe({
      next: (response: any) => {
        console.log(response);
        this.route.navigate(['/home']);
      },
      error: (err: any) => {
        console.log('error::', err);
      },
    });
  }
  resetOnClick() {
    this.adminAddFoodForm.resetForm();
  }
}
export interface foodData{
  id: string;
  veg: boolean;
  nonveg: boolean;
  description: string;
  name: string;
  category: string;
  image: string;

}
