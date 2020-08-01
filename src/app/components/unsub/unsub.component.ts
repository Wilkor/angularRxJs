import { Component, OnInit,OnDestroy } from '@angular/core';
import { SubscribeServiceService} from '../../subscribe-service.service'
import { Subscription } from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.component.html',
  styleUrls: ['./unsub.component.scss']
})
export class UnsubComponent implements OnInit, OnDestroy{


  constructor(private service: SubscribeServiceService) { }

 valor: string;
 nome: string = 'Usando o Unsubscribe';
 sub: Subscription[] = [];

  ngOnInit(): void {

    this.sub.push(this.service.getValue()
    .pipe(tap(v => console.log(`${this.nome}, ${v}`)))
    .subscribe(novoValor => this.valor = novoValor))
  }


  ngOnDestroy(){

    this.sub.forEach(s => s.unsubscribe());
    console.log(`${this.nome}, foi destruido`)

  }

}
