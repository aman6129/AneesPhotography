import { Component, OnInit } from '@angular/core';
import { ImageStoreService } from '../services/image-store.service';
import { environment } from '../../environments/environment';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private folders: any;
  private selectedFiles: FileList;
  private baseUrl: string;

  private tnLoaded = false;

  constructor(private imageService: ImageStoreService,
    private router: Router) {
    this.baseUrl = environment.storageServiceInfo.s3BaseUrl;
  }

  ngOnInit() {
    this.imageService.getAllFolders()
      .subscribe(
        folders => this.folders = folders['CommonPrefixes'],
        error => console.error(error),
        () =>  this.getFolderImages()
      );
  }

  private getFolderImages() {
    for (const folder of this.folders) {
      let folderName = folder.Prefix;
      folderName = folderName.substr(0, folderName.length - 1);
      const imgName = folder.Prefix + folderName + '_tn.JPG';
      folder['imagePath'] = imgName;
    }

    this.tnLoaded = true;
  }

  private goToGallery(folderName: string) {
    folderName = folderName.replace('/', '');
    this.router.navigate(['gallery', folderName]);
  }

}
