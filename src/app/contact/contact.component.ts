import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls:['../app.component.scss']
})

export class ContactComponent{
  titulo: any;
  constructor(){
    this.titulo= 'Hola'
  }
}
