import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
// export class HeroesComponent implements OnInit {

//   constructor(private heroService:HeroService, public messageService:MessageService) { 
//   }

//   ngOnInit(): void {
//     this.getHeroes()
//   }

//   selectedHero?: Hero
//   heroes: Hero[] = []

//   // onSelect(hero: Hero): void {
//   //   this.selectedHero = hero;
//   // }  

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
//   }

//   // getHeroes(): void {
//   //   this.heroes = this.heroService.getHeroes();
//   // }  

//   getHeroes(): void {
//     this.heroService.getHeroes()
//         .subscribe(heroes => this.heroes = heroes);
//   }
  
// }
