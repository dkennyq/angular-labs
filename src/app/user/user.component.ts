import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = 'John Doe';
  age = 30;
  IsLoggedIn = false;
  favoriteGame = '';

  getFavoriteGame(gameName: string) {
    this.favoriteGame = gameName;
  }

  greet() {
    alert('Hello ' + this.name);
  }

  login() {
    this.IsLoggedIn = true;
  }

  logout() {
    this.IsLoggedIn = false;
  }
}
