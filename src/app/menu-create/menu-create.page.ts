import { Component, OnInit } from '@angular/core';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { combineAll, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { ISasToken } from 'src/services/blob-storage/azureStorage';
import { BlobStorageService } from 'src/services/blob-storage/blob-storage.service';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.page.html',
  styleUrls: ['./menu-create.page.scss'],
})
export class MenuCreatePage implements OnInit {
  fg: FormGroup;
  file: any;
  sas: any;
  uploadProgress$: Observable<IUploadProgress[]>;
  catagory$ = Promise.resolve([]);
  constructor(private blobStorage: BlobStorageService, private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      "categoryName": [null, Validators.required],
      "previewImageId": '',
      "price": [0, Validators.required],
      "note": ''
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("เพิ่มเมนู");
    this.catagory$ = this.restaurantSvc.getCategoryList();
  }

  selectPhoto(event) {
    this.file = event.target.firstChild.files;
    var preview = document.querySelectorAll('img');
    var reader = new FileReader();
    reader.onload = function (e: any) {
      preview[preview.length - 1].src = e.target.result;
    };
    reader.readAsDataURL(this.file[0]);
  }

  submit() {
    console.log(this.fg);

    if (this.fg.valid) {
      this.restaurantSvc.createProduct(this.fg.value).then(_ => {
        this.restaurantSvc.getSasToken().then(it => {
          this.sas = it;
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFile(file)),
            combineAll(),
          );
        })
        this.nativeSvc.NavigateToPage("menu-main");
      });
    }
  }

  uploadFile(file: File): Observable<IUploadProgress> {
    var accessToken: ISasToken = {
      container: this.sas.containerName,
      filename: file.name,
      storageAccessToken: this.sas.complementary,
      storageUri: this.sas.blobUrl
    };
    return this.blobStorage
      .uploadToBlobStorage(accessToken, file)
      .pipe(map(progress => this.mapProgress(file, progress)));
  }
  private mapProgress(file: File, progress: number): IUploadProgress {
    return {
      filename: file.name,
      progress: progress
    };
  }
}
