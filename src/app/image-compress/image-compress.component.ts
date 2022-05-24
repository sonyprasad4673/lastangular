import { Component, OnInit } from '@angular/core';
import {
  DataUrl,
  DOC_ORIENTATION,
  NgxImageCompressService,
  UploadResponse,
} from 'ngx-image-compress';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.sass'],
})
export class ImageCompressComponent implements OnInit {
  imgResultBeforeCompress: DataUrl = '';

  imgResultAfterCompress: DataUrl = '';

  imgResultUpload: DataUrl = '';

  constructor(private imageCompress: NgxImageCompressService) {}

  compressFile() {
    return this.imageCompress
      .uploadFile()
      .then(({ image, orientation }: UploadResponse) => {
        this.imgResultBeforeCompress = image;
        // compress the image
        this.imageCompress
          .compressFile(image, orientation, 50, 50)
          .then((result: DataUrl) => {
            this.imgResultAfterCompress = result;
          });
      });
  }
  uploadFile() {
    return this.imageCompress
      .uploadFile()
      .then(({ image, orientation }: UploadResponse) => {
        this.imgResultUpload = image;
      });
  }

  ngOnInit(): void {}
}
