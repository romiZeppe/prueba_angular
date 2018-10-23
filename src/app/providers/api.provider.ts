import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
//instalar npm install rxjs@6 rxjs-compat@6 --save
import 'rxjs/add/operator/map';

//para que pueda ser inyectado en los componentes y que otros modulos puedan
//ser inyectados dentro del servicio
@Injectable()

export class ApiProvider{
  api_key: string = '924d63ea90a7e857b6dd15c58f225020'


  constructor(public http: Http){}

  public getTopArtist(){
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=argentina&api_key=${this.api_key}&limit=12&format=json`)
    .map(res => res.json())
  }

}
