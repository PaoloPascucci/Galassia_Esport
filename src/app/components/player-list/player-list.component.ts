import { Component } from '@angular/core';
import { Player } from '../../models/player';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  standalone: false,
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss',
})
export class PlayerListComponent {
  players: Player[] = [];
  constructor(private playerSrv: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.playerSrv.getPlayer().subscribe(
      (all) => {
        this.players = all;        
      },
      (error) => {
        console.error('errore nella get dei player', error);
      }
    );
  }
}
