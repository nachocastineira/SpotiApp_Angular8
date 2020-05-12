import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

//  paises: any[] = [];
  // constructor( private http: HttpClient ) {
    // //Invocacion al service, con el suscribe obtengo la respuesta que devuelve ese service. De prueba, se recomienda en un file externo
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //               .subscribe( (respuesta: any) => {
    //                 this.paises = respuesta; // Guardo esa respuesta en un objeto array de paises
    //                 console.log(respuesta);
    //      });
  // }

  nuevasCanciones: any[] = [];
  loading: boolean; // Para mostrar el icono de loading mientras la info se esté cargando

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
           this.nuevasCanciones = data;
           this.loading = false; // Termina de cargar la info, saco el loading
      } );
  }


}
