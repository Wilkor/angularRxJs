import { Component, OnInit } from '@angular/core';
import {SubscribeServiceService} from '../../subscribe-service.service'
@Component({
  selector: 'app-home-subcribe',
  templateUrl: './home-subcribe.component.html',
  styleUrls: ['./home-subcribe.component.scss']
})
export class HomeSubcribeComponent implements OnInit {

 public mostrarComponentes = true;

  constructor(
     private service: SubscribeServiceService
  ) { }

  ngOnInit(): void {
  }


  handleEmitiValeu(cep: string) {

    this.service.emiteValue(cep)

  }

  destruirComponentes(){

    this.mostrarComponentes = !this.mostrarComponentes;

  }

}
