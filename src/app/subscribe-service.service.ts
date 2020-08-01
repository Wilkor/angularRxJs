import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class SubscribeServiceService {

  private emissor$ = new Subject<string>();

 async emiteValue (valor: string){

   const urlCep = `https://viacep.com.br/ws/${valor}/json/`;

   const response  = await axios.get(urlCep);

   const {logradouro, bairro} = response.data

    this.emissor$.next(`Rua: ${logradouro} | Bairro: ${bairro}`);

  }

  getValue() {
    return this.emissor$.asObservable();
  }

}
