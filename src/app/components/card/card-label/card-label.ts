import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  imports: [],
  templateUrl: './card-label.html',
  styleUrl: './card-label.css',
})
export class CardLabel implements OnInit {

    @Input()
    gameLabel:string = "";

    ngOnInit(): void {
    }
  }
