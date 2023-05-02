import { PkmnService } from './../pkmn.service';

import { Component, OnInit } from '@angular/core';
import { Pkmn } from '../pkmn';

@Component({
  selector: 'app-pkdx',
  templateUrl: './pkdx.component.html',
  styleUrls: ['./pkdx.component.css']
})
export class PkdxComponent implements OnInit {

  pkmn : Pkmn = {} as Pkmn;

  constructor(private PkmnService : PkmnService){}

  ngOnInit(): void{
    this.loadPkmn();
  }

  loadPkmn(){
    this.PkmnService.getRandonPkmn().subscribe(
      {
        next : pkmn = this.pkmn = pkmn
      }
    );
  }

  nextPkmn()
  {
     this.PkmnService.getNextPkmn().subscribe(
      {

      }
    );
  }

  previousPkmn()
  {
    this.PkmnService.getPreviousPkmn().subscribe(
      {

      }
    );
  }

  getName(): string{
    return this.pkmn.message.split("/")[4];
  }




}

