import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ImageStoreService {
    private account: string;
    private s3: any;
    private folder = 'animals/';
    constructor(private http: HttpClient) {
        this.account = environment.storageServiceInfo.account;
        this.s3 = new S3({
            accessKeyId: environment.storageServiceInfo.accessKeyId,
            secretAccessKey: environment.storageServiceInfo.secretKey,
            region: 'us-west-2'
        });
    }

    public getAllFolders() {
        return this.getFolders('/', null);
    }

    public getFolderImages(folder: string) {
        return this.getFolders('/', folder);
    }

    public getFolders(delimiter: string, prefix: string): Observable<any> {
        const params = {
            Bucket: environment.storageServiceInfo.account,
            Prefix: prefix,
            Delimiter: delimiter
        };

        return Observable.create((observer: Observer<void>) => {
            this.s3.listObjectsV2(params, (err, data) => {
                if (err) {
                    console.log(err);
                    observer.next(err);
                    observer.complete();
                }
                observer.next(data);
                observer.complete();
            });
        });

    }

    public loadImage(key: string): Observable<any> {
        return Observable.create((observer: Observer<void>) => {
            this.s3.getObject(key, (err, data) => {
                if (err) {
                    console.log(err);
                    observer.next(err);
                    observer.complete();
                }
                observer.next(data);
                observer.complete();
            });
        });
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('an error ocurred:' , error.error.message);
        } else {
            console.error(
                'Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }

        return new ErrorObservable(
            'Error'
        );
    }
}
