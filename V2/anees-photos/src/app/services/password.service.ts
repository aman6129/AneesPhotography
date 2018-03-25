import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PasswordService{

    constructor(){

    }

    verifyPassword(passwordString: string): boolean {
        if (passwordString === 'password') {
            return true;
        } else {
            return false;
        }
    }
}
