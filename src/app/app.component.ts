import { Component, OnInit } from '@angular/core';
import { ImageCacheService } from './services/ImageCacheService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'caching-image';
  img: any;
  constructor(private imageCacheService: ImageCacheService) {}


  ngOnInit(){
    this.getImage()
  }

  getImage(){
    this.imageCacheService.getImg().subscribe((response : any) => {
      this.img = response.imageUrl
    })
    }
}


