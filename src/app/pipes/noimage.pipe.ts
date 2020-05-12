import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})

// Realizo un Pipe personalizado para los casos en que un artista venga sin imagen
export class NoimagePipe implements PipeTransform {

  transform( images: any[]): string {

    // Si el array no retorna imagenes, devuelve el noimage.png
    if ( !images ){
      return 'assets/img/noimage.png';
    }

    if ( images.length > 0 ) {
      return images[0].url;
    }

    return null;
  }

}
