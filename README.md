# Uppload files to cloud from Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository covers uploading files to Cloudinary Service from Angular.
Cloudinary provides a cloud-based image and video management services. It enables users to upload, store, manage, manipulate, and deliver images and video for websites and apps. You can upload up to 25GB of files on a free licence.


### Installation
* [Create Cloudinary Account](https://cloudinary.com/) - It is free up to 25GB of storage
* [Node.js and npm](https://www.npmjs.com/get-npm) - Download Node.js and nmp
* [Angular](https://angular.io/guide/setup-local) - Get started with Angular

### Project Setup

Set up your project with Angular CLI

```sh
$ ng new your-project-name
$ cd your-project-name
$ ng serve 
```

Install the needed dependencies.

```sh
$ npm install ng2-file-upload --save
$ npm install @cloudinary/angular-5.x --save
$ npm install cloudinary-core --save
```

### Configure app.module.ts

```typescript
imports: [
    ...

    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'YOUR CLOUD NAME', api_key: 'YOUR API KEY', api_secret: 'YOUR API SECRET', upload_preset: 'YOUR PRESET' } as CloudinaryConfiguration),
    FileUploadModule,

    ...
  ],
```

### Create Service

```sh
$ ng g s services/cloudinary
```

| Service | [cloudinary.service.ts](https://github.com/amarcatovic/Angular-Upload-Image-To-Cloud/blob/master/src/app/services/cloudinary.service.ts) |

### Create Upload File Component

```sh
$ ng g c upload-file
```

| Component | [upload-file component](https://github.com/amarcatovic/Angular-Upload-Image-To-Cloud/tree/master/src/app/upload-file) |

Inject the service as public

### Launch app and upload file