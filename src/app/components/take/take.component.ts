import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubscribeServiceService} from '../../subscribe-service.service';

import {tap,take} from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class PocTakeComponent implements OnInit, OnDestroy {

  valor: string;
  nome: string = "Componente usando take";

  constructor(
    private service: SubscribeServiceService
  ) { }

  ngOnInit(){

     this.service.getValue()
     .pipe(
       tap(value => console.log(this.nome, value)),
       take(1)
     ).subscribe(end => this.valor = end)

  }

  ngOnDestroy(){

   console.log(`${this.nome} foi destruido`);

    }

}
