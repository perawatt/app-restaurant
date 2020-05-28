import { Injectable } from '@angular/core';
import { BlobStorageService } from '../blob-storage/blob-storage.service';
import { ISasToken } from '../blob-storage/azureStorage';
import { IUploadProgress } from '../blob-storage/iblob-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private blobStorage: BlobStorageService) { }

  uploadFile(file: File, sasToken: any): Observable<IUploadProgress> {
    const accessToken: ISasToken = {
      container: sasToken.containerName,
      filename: sasToken.imageId,
      storageAccessToken: sasToken.saS,
      storageUri: sasToken.storageUri
    };
    return this.blobStorage
      .uploadToBlobStorage(accessToken, file)
      .pipe(map(progress => this.mapProgress(file, progress)));
  }

  private mapProgress(file: File, progress: number): IUploadProgress {
    return {
      filename: file.name,
      progress: progress,
    };
  }
}


