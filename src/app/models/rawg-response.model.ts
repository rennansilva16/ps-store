import { RawgGame } from './rawg-game.model';

export interface RawgResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawgGame[];
}
