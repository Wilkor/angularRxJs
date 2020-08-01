import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-base',
  templateUrl: './cards-base.component.html',
  styleUrls: ['./cards-base.component.scss']
})
export class CardsBaseComponent implements OnInit {

  @Input() nome: string;
  @Input() valor: string;
  @Input() estilo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
