import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pkmn } from './pkmn';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  constructor(private http:HttpClient) { }


  getRandonPkmn():Observable<Pkmn>{

    return this.http.get<Pkmn>("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")

  }

  getPreviousPkmn():Observable<Pkmn>{

    return this.http.get<Pkmn>("https://pokeapi.co/api/v2/pokemon/1")

  }

  getNextPkmn():Observable<Pkmn>{

    return this.http.get<Pkmn>("https://pokeapi.co/api/v2/pokemon/1")

  }


}
