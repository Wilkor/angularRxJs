import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubscribeServiceService} from '../../subscribe-service.service';

@Component({
  selector: 'app-sem-unsubscribe',
  templateUrl: './sem-unsubscribe.component.html',
  styleUrls: ['./sem-unsubscribe.component.scss']
})
export class SemUnsubscribeComponent implements OnInit, OnDestroy{

  nome: string = "Componente sem unsubscribe";
  valor: string;


  constructor(
    private service: SubscribeServiceService
  ) { }

  ngOnInit(): void {

   this.service.getValue()
   .subscribe(end => {

     console.log(`${this.nome}`, end)
     this.valor = end
    }
     );

  }

  ngOnDestroy(): void {


    console.log(`${this.nome} foi destruido`)

  }

}
