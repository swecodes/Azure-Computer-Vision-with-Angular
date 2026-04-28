import { Component } from '@angular/core';
import { ComputerVisionService } from './services/computer-vision.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl: string = '';
  result: any;
  loading: boolean = false;

  constructor(private visionService: ComputerVisionService) {}

  analyzeImage() {
    if (!this.imageUrl) return;

    this.loading = true;

    this.visionService.analyzeImage(this.imageUrl).subscribe({
      next: (response) => {
        this.result = response;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }
}