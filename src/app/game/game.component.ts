import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  template:`
  <h2>Game list of {{username}}</h2>
  <ul>
    @for (game of games; track game.id) {
      <li (click)="favoriteGame(game.name)">{{game.name}}</li>
    }
  </ul>`,
  styles: ``
})

export class GameComponent {
  @Input() username = '';
  @Output() addFavoriteGameEvent = new EventEmitter<string>();

  favoriteGame(gameName: string) {
    this.addFavoriteGameEvent.emit(gameName);
  }

  games = [
    {
      id:1,
      name: 'Super Mario Bros'
    },
    {
      id:2,
      name: 'Zelda'
    },
    {
      id:3,
      name: 'Metroid'
    },
    {
      id:4,
      name: 'Donkey Kong'
    }
  ]
}
