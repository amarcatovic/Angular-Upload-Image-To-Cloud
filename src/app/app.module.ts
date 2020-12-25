import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { FileUploadModule } from 'ng2-file-upload';
import { Cloudinary } from 'cloudinary-core';

@NgModule({
  declarations: [	
    AppComponent,
    UploadFileComponent,
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'YOUR CLOUD NAME', api_key: 'YOUR API KEY', api_secret: 'YOUR API SECRET', upload_preset: 'YOUR PRESET' } as CloudinaryConfiguration),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
