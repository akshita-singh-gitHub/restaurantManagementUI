import { Component, OnInit } from '@angular/core';
import { RestoList } from '../model';
import { RestoTrialService } from '../resto-trial.service';



@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {
 

listItem: RestoList[]=[];
RestotoEdit?: RestoList;

  constructor( private trialSer: RestoTrialService) { }

  ngOnInit(): void {
   this.trialSer.GetRestoList().subscribe((result: RestoList[]) => {
   this.listItem=result
  console.log(result); }
   );

   console.log(this.listItem);
  

  }

  // updateHeroList(heroes: SuperHero[]) {
  //   this.heroes = heroes;
  // }

  initNewResto() {
    this.RestotoEdit = new RestoList();
  }

  editResto(item: RestoList) {
    this.RestotoEdit = item;
  }

}
