import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
api = environment.apiURL;
single!: Player;
  constructor(private http:HttpClient, private router:Router) { }
  getPlayer(){
    return this.http.get<Player[]>(`${this.api}/players`);
  }
  getSinglePlayer(id:number){
    return this.http.get<Player>(`${this.api}/players/${id}`)
  }
  goBackHome() {
    this.router.navigate(['/']);
  }
}
