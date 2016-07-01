import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'showImage'})
export class ShowImagePipe implements PipeTransform {
  transform(images: any): string {
    if(images.poster.thumb != null)
        return images.poster.thumb;
    else if(images.poster.medium != null)
        return images.poster.medium;
    else if(images.poster.full != null)
        return images.poster.full;
    else if(images.thumb.full != null)
        return images.thumb.full;
    else if(images.fanart.thumb != null)
        return images.fanart.thumb;
    else if(images.fanart.medium != null)
        return images.fanart.medium;
    else if(images.fanart.full != null)
        return images.fanart.full;
    else if(images.logo.full != null)
        return images.logo.full;
    else if(images.clearart.full != null)
        return images.clearart.full;
    else if(images.banner.full != null)
        return images.banner.full;
    else
        return '';
  }
}