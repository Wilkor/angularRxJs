import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscribeServiceService {

  private emissor$ = new Subject<string>();

  emiteValue (valor: string){

    this.emissor$.next(valor);

  }

  getValue() {

    return this.emissor$.asObservable();


  }

}
