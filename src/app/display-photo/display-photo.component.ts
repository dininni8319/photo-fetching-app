import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})

export class DisplayPhotoComponent implements OnInit {
  randomPhoto = ''
  defaultPhoto = '../../assets/default-avatar.jpg'
  
  constructor(
    private fetchPhotoService: FetchPhotoService
  ) {
    this.getPhoto()
  }

  onClick() {
    this.getPhoto()
  }

  getPhoto() { 
    this.fetchPhotoService.getRandomPhoto()
      .subscribe((photo) => {
        console.log('data: ',photo)
        this.randomPhoto = photo.urls.small;
    })
  }

  ngOnInit(): void {
  }
}
