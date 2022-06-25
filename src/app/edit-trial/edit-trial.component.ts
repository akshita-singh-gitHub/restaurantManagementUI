import { Component, Input, OnInit } from '@angular/core';
import { RestoList } from '../model';

import { TrialComponent } from '../trial/trial.component';

@Component({
  selector: 'app-edit-trial',
  templateUrl: './edit-trial.component.html',
  styleUrls: ['./edit-trial.component.css']
})
export class EditTrialComponent implements OnInit {

  @Input() listItem?: RestoList;

  constructor() { }

  ngOnInit(): void {
  }

  // updateHero(hero: RestoList) {
  //   this.RestoListService
  //     .updateHero(hero)
  //     .subscribe((heroes: RestoList[]) => this.heroesUpdated.emit(heroes));
  // }

  // deleteHero(hero: RestoList) {
  //   this.RestoListService
  //     .deleteHero(hero)
  //     .subscribe((heroes: RestoList[]) => this.heroesUpdated.emit(heroes));
  // }

  // createHero(hero: RestoList) {
  //   this.RestoListService
  //     .createHero(hero)
  //     .subscribe((heroes: RestoList[]) => this.heroesUpdated.emit(heroes));
  // }

}
