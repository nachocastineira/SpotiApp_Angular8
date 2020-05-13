## Aplicación de Práctica SpotiApp - Angular 8+ ___(Mayo de 2020)___ 

### Curso: Angular De cero a experto creando aplicaciones (Angular 8+)


El objetivo de la práctica es crear un proyecto de cero y comprender los siguientes temas:
- Reforzamiento de rutas y parámetros de rutas.
- Uso del HTTP para obtener información
- Uso de la API de Spotify para obtener información de Artistas, Albumes y Audio
- Trabajo sobre el manejo de data asíncrona.
- ngModel para enlazar campos de texto a variables del componente.
- Widgets de Spotify y HTML5 audio
- Observables y Maps

***

### :wrench: Tecnologias Utilizadas: ####

* Proyecto desarrollado en lenguaje de programación __TypeScript__ y __ECMAScript 6__

* Utilización del framework __Angular 8__

* Utilización de API Rest de __Spotify for Developers__ https://developer.spotify.com/console/

* FrontEnd desarrollado en __HTML5__ y __CSS3__

* Utilización del framework __Bootstrap v4.1.3__

***
### :link: API Rest utilizadas - Spotify for Developers: ####
 
* Get an API Token <https://accounts.spotify.com/api/token>

* Get an Artist <https://developer.spotify.com/console/get-artist/>

* Get an Artist's Top Tracks <https://developer.spotify.com/console/get-artist-top-tracks/>

* Search <https://developer.spotify.com/console/search/>

* Get a List of New Releases <https://developer.spotify.com/console/get-new-releases/>

***
 ### :exclamation: Puntos importante para correr el proyecto:

 * Clonar el proyecto y correr el siguiente comando en la raíz:

       ng serve -o

 * Realizar una petición POST via Postman al rest de Token, pasar como parámetro el grant_type, client_id y client_secret:

       Guía: <developer.spotify.com/documentation/general/guides/authorization-guide/>
       
 * Reemplazar el access_token de retorno en el file spotify.service.ts linea 21. 
    ```
    {
     "access_token": "BQCniJeRmMmbm85smJy5UGL6DdG5N0pMngc2QbkF0x2ov83MoW5J9NPB9Dxlr-llINyiDcn2PgTNzju-MzY",
     "token_type": "Bearer",
     "expires_in": 3600,
     "scope": ""
    }    
    ```
       
***
### :eyes: Interfaz de SpotiApp: ####

![picture alt](https://oi410.photobucket.com/albums/pp182/nacho_0804/Anotacioacuten%202020-05-13%20132646_zpst8cmwwfm.png)

![picture alt](https://oi410.photobucket.com/albums/pp182/nacho_0804/Anotacioacuten%202020-05-13%20133442_zpsvu7snulv.png)

![picture alt](https://oi410.photobucket.com/albums/pp182/nacho_0804/Anotacioacuten%202020-05-13%20133256_zpsktmwxjyy.png)

***
#### :computer:  Proyecto realizado por Ignacio Castiñeira <https://github.com/nachocastineira>
#### :globe_with_meridians:  Tutorial de Angular 8+ <https://www.udemy.com/course/angular-2-fernando-herrera/>
