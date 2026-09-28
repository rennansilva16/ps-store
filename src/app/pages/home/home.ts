import { Card } from '../../components/card/card';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { RawgService } from '../../services/rawg.service';
import { RawgGame } from '../../models/rawg-game.model';

@Component({
  selector: 'app-home',
  imports: [
    Card
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  games: RawgGame[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.rawgService.getGames().subscribe({
      next: (response) => {
        console.log('Games fetched successfully:', response.results);
        this.games = response.results;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erro ao buscar jogos.', error;
        this.isLoading = false;
      }
    })
  }
}
