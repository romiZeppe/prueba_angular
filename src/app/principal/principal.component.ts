import {Component} from '@angular/core';
import {ApiProvider} from '../providers/api.provider';

@Component({
  //con que etiqueta sera llamado
  selector: 'app-principal',
  //donde esta la vista del mismo
  templateUrl: './principal.component.html',
  //si se quiere agregar una hoja de estilos especialmente para este componente
  styleUrls:['../app.component.scss']
  //si se quiere agregar un servicio que funcione para este componente
  //providers:['donde esta el provider']
})

export class PrincipalComponent{
    //se declaran las variables con el tipo de dato que contienen, puede ser string
    //number, array, boolean, any.
    titulo: string;
    texto: any;
    muestro: boolean = false;
    estado: any;
    artist: any;
    constructor(private apiServ: ApiProvider){
      this.titulo = 'Mas escuchados Argentina';
      this.texto='';
    }

    mostrar(){
      this.estado = "Estoy mostrando los mas escuchados";
      this.muestro = true;
      this.apiServ.getTopArtist().subscribe(
        res=>{
          console.log(res.topartists.artist);
          this.artist = res.topartists.artist;
        })
    }

}
