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

    const url = `https://api.spotify.com/v1/${ query }`;

    // Creo los header requeridos en mi servicios
    const headers = new HttpHeaders({
    Authorization: 'Bearer BQCnmxfhbR-Yxt2P3whY35VL4yDd5HxfIoWW5-ddON4Zzkp8Fl8sBvRY733YtgQHkySJaN-Og4C4Vygsvcw'
    });

    // A la URL le paso los headers necesarios para que funcione
    return this.http.get(url, { headers });
   }


getNewReleases(){

  return this.getQuery('browse/new-releases?limit=20') // Utilizo el getQuery para no repetir codigo
              .pipe( map ( data => {  // Acá implemento el map junto al pipe, donde filtro la data bruta en solo albums
                return data['albums'].items; // Retorno la data y aplico el filtro ['albums']
            }));
  }

getArtista( termino: string) {

  // Como el data solo tiene una linea, lo puedo abreviar asi
  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map ( data => data['artists'].items));
}

}
