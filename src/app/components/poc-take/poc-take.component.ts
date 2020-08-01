import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubscribeServiceService} from '../../subscribe-service.service';

import {tap,take} from 'rxjs/operators';

@Component({
  selector: 'app-poc-take',
  templateUrl: './poc-take.component.html',
  styleUrls: ['./poc-take.component.scss']
})
export class PocTakeComponent implements OnInit, OnDestroy {

  valor: string;
  nome: string = "Usando take";

  constructor(
    private service: SubscribeServiceService
  ) { }

  ngOnInit(){

     this.service.getValue()
     .pipe(
       tap(v => console.log(this.nome, v)),
       take(1)
     ).subscribe(novoValor => this.valor = novoValor)

  }

  ngOnDestroy(){

   console.log(`${this.nome} foi destruido`);
    }

}
