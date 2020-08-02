import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscribeServiceService } from 'src/app/subscribe-service.service';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit, OnDestroy{

  nome: string = 'Componente com Async';
  valor$: Observable<string>;

  constructor(
    private service: SubscribeServiceService
  ) { }

  ngOnInit(): void {

    this.valor$ = this.service.getValue()
    .pipe(tap((valor) => console.log(this.nome, valor)))

  }

  ngOnDestroy(): void {

  console.log(`${this.nome} foi destruido`)
  }

}
