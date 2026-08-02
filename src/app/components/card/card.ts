import { Component } from '@angular/core';
import { CardLabel } from './card-label/card-label';
import { CardPricing } from './card-pricing/card-pricing';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [
    CardLabel,
    CardPricing
  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {

  @Input()
  gameCover:string = "";

  @Input()
  gameLabel:string = "";

  @Input()
  gameType:string = "";

  @Input()
  gamePrice:string = "";

  ngOnInit(): void {}
}
