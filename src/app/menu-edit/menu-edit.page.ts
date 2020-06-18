import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IUploadProgress } from 'src/services/blob-storage/iblob-storage';
import { Observable, from } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
import { UploadFileService } from 'src/services/upload-file/upload-file.service';
import { NativeService } from 'src/providers/NativeService';
import { RestaurantService } from 'src/services/restaurant.service';
import { map, combineAll } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.page.html',
  styleUrls: ['./menu-edit.page.scss'],
})
export class MenuEditPage implements OnInit {
  public fg: FormGroup;
  public file: any;
  onAction: boolean;
  public sas: any;
  productId: string;
  public uploadProgress$: Observable<IUploadProgress[]>;
  public catagory$ = Promise.resolve([]);
  catagory: any[];
  alert: any;
  constructor(private route: ActivatedRoute, private alertCtr: AlertController, private loadingCtr: LoadingController, private uploadFileSvc: UploadFileService, private fb: FormBuilder, private nativeSvc: NativeService, private restaurantSvc: RestaurantService) {
    this.route.params.subscribe(param => { this.productId = param["productId"] });
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      "categoryName": [null, Validators.required],
      "previewImageId": '',
      "price": [0, Validators.required],
      "note": ''
    });
  }

  ngOnInit() {
    this.nativeSvc.SetPageTitle("แก้ไขเมนู");
    this.getCategory()
    this.getData();
  }

  async getData() {
    this.restaurantSvc.getProduct(this.productId).then((it: any) => {
      this.fg.patchValue(it);
    }, async error => {
      this.alert.message = error.error.message;
      await this.alert.present();
    });
  }

  async getCategory() {
    this.alert = await this.alertCtr.create({
      header: 'เกิดข้อผิดพลาด',
      message: "",
      buttons: [{
        text: 'ตกลง',
        handler: () => {
          this.nativeSvc.GoBack();
        },
      }],
      backdropDismiss: false
    });

    this.catagory$ = this.restaurantSvc.getCategoryList();
    this.catagory$.then((it: any) => {
      this.catagory = it;
    }, async error => {
      this.alert.message = error.error.message;

      await this.alert.present();
    })
  }
  checkCategoryCanNote(): boolean {
    let categorySelect = this.catagory && this.catagory.find((it: any) => it.categoryName == this.fg.get('categoryName').value);
    return categorySelect && categorySelect.canNote;
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

  getPhoto(): string {
    let urlImage = this.fg.get('previewImageId').value != null ? this.fg.get('previewImageId').value : 'assets/imgs/dfmenu.png';
    return "https://manamockapi.azurewebsites.net/Image/" + urlImage;
  }

  async submit() {
    if (this.fg.valid) {
      this.onAction = true;
      let formData = this.fg.value;
      if (this.file == null) {
        this.restaurantSvc.updateProduct(this.productId, formData).then(_ => {
          this.nativeSvc.GoBack();
        });
      }
      else {
        const loading = await this.loadingCtr.create({
          message: 'Image Uploading....'
        });
        const alert = await this.alertCtr.create({
          header: 'Error',
          message: 'Image Upload Failed.',
          buttons: ['OK']
        });
        await loading.present();
        this.restaurantSvc.getSasManaUpload(formData.previewImageId).then(it => {
          this.sas = it;
          this.uploadProgress$ = from(this.file as FileList).pipe(
            map(file => this.uploadFileSvc.uploadFile(file, this.sas)),
            combineAll(),
          );

          this.uploadProgress$.subscribe(
            _ => {
              if (_.find(it => it.progress >= 100)) {
                formData.previewImageId = this.sas.imageId
                this.restaurantSvc.updateProduct(this.productId, formData).then(_ => {
                  loading.dismiss();
                  this.nativeSvc.GoBack();
                }, async _ => {
                  const alert = await this.alertCtr.create({
                    header: 'Error',
                    message: _.error.message,
                    buttons: ['ตกลง']
                  });

                  loading.dismiss();
                  await alert.present();
                  this.onAction = false;
                });
              }
            }, async error => {
              loading.dismiss();
              await alert.present();
              this.onAction = false;
            })
        });
      }
    }
  }

}
