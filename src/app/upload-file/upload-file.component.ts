import { CloudinaryService } from './../services/cloudinary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor(public cloudinaryService: CloudinaryService) { }

  ngOnInit() {
    this.cloudinaryService.onUploadedPhotoGetLink.subscribe((responseUrl: string) => {
      console.log(responseUrl);
    });
  }

}
