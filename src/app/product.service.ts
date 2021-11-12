import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operator/map';
import { AlbumStorePage } from '../../e2e/app.po';
import { rxjs/add/operator/map } from @angu

@Injectable()
export class ProductService {

   constructor() { 
    private_http: Http;

  }

}

class private _albumUrl() {

  
  _albumUrl = ../assets/AlbumStorePage.json;
  
}

getAlbum(id: number) ( => {
  return( this._http.get(_albumUrl))
  Response.json();
}); 

