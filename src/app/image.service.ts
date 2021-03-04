import { fromEvent as observableFromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable()
export class ImageService {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Read image
   * @param {File|Blob} image
   */
  readImage(image: File | Blob): Observable<string> {
    const reader = new FileReader();
    const fileReader$ = observableFromEvent(reader, 'load');
    reader.readAsDataURL(image); // Read file data


    return fileReader$.pipe(map(event => reader.result.toString()));
  }

  /**
   * Get image safe data url for template usage
   * @param {File|Blob} image
   */
  getSafeImageDataUrl(image: File | Blob): Observable<SafeResourceUrl> {
    return this.readImage(image).pipe(map(dataUrl => this.sanitizer.bypassSecurityTrustResourceUrl(dataUrl)));
  }

}


