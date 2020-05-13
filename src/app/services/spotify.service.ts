import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service Spotify listo');
   }

   // Funcion para obtener la parte comun de las url del api rest, para centralizar parte del codigo
   getQuery( query: string) {

    const url = `https://api.spotify.com/v1/${ query }`; // Parte de la url comun en todos los servicios

    // Creo los header requeridos en mi servicios
    const headers = new HttpHeaders({
    Authorization: 'Bearer BQDz2KuzM_sJXl2bCbLBzmiNbBzh4gnfstjegaB_yrgrr7TQ-w3eneXxOVpBszPeZh6d4rF8kh90xu5yPsk'
    });

    // A la URL le paso los headers necesarios para que funcione
    return this.http.get(url, { headers });
   }

// Servicio que devuelve los nuevos lanzamientos globales, se limita a 20 registros y se muestra los datos del album
getNewReleases(){
  return this.getQuery('browse/new-releases?limit=20') // Utilizo el getQuery para no repetir codigo
              .pipe( map ( data => {  // Acá implemento el map junto al pipe, donde filtro la data bruta en solo albums
                return data['albums'].items; // Retorno la data y aplico el filtro ['albums']
            }));
  }

// Servicio para obtener Artistas, con parametro se le pasa un nombre o parte de un nombre
getArtistas( termino: string) {
  // Como el data solo tiene una linea, lo puedo abreviar asi
  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map ( data => data['artists'].items));
}

// Servicio que devuelve los datos de un artista especifico, como parametro se le debe pasar su id
getArtista( id: string) {
  return this.getQuery(`artists/${ id }`); // .pipe( map ( data => data['artists'].items));
}

// Servicio que devuelve los top tracks de un artista especifio, se le pasa el id del artista y el pais
getTopTracks( id: string ) {
  return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map ( data => data['tracks']));
}

}
