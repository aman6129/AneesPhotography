import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageStoreService } from '../services/image-store.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private galleryName: string;
  private gallerySize: number;
  private imageKeys: any;
  private baseUrl: string;

  constructor(private route: ActivatedRoute,
   private imageService: ImageStoreService) {
     this.baseUrl = environment.storageServiceInfo.s3BaseUrl;
    }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.galleryName = params['folderName'];

      this.imageService.getFolderImages(this.galleryName + '/')
        .subscribe(
          images => this.imageKeys = images.Contents,
          error => console.error(error),
          () => this.removeExcessKeys()
        );
    });
  }

  private removeExcessKeys() {
    this.imageKeys.splice(0, 1);
    this.imageKeys = this.imageKeys.filter(x => x.Key !== this.galleryName + '/' + this.galleryName + '_tn.JPG');

    this.gallerySize = this.imageKeys.length;
    console.log(this.imageKeys);
  }

  private toggleExpand(img: any) {
    let imgIndex = this.imageKeys.indexOf(img);
    const isExpanded = this.imageKeys[imgIndex]['expanded'];
    this.imageKeys[imgIndex]['expanded'] = isExpanded === false || isExpanded === undefined ? true : false;

  }

}
