import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../models/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-single',
  standalone: false,

  templateUrl: './player-single.component.html',
  styleUrl: './player-single.component.scss',
})
export class PlayerSingleComponent {
  player: Player | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerSrv: PlayerService
  ) {}

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Player ID:', playerId);
  
    this.playerSrv.getSinglePlayer(playerId).subscribe({
      next: (data) => {
        if (data) {
          this.player = data;
          console.log('Player found:', this.player);
        } else {
          console.error('Player not found');
          this.playerSrv.goBackHome();
        }
      },
      error: (err) => console.error('Errore del caricamento del player', err),
    });
  }
}
