import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from './../hero.service';
import { MessagesService } from './../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  private heroes: Hero[];
  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}
  ngOnInit(): void {
    this.intHeroes();
  }
  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  // }
  intHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = [...heroes]));
  }
  getHeroes(): Hero[] {
    return [...this.heroes];
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes = [...this.heroes, hero];
    });
  }
  delate(hero: Hero): void {
    // remove it before the data store was updated(faster response)
    // this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(deletedHero => {
      // remove it after the deletion operation success (safer?)
      this.heroes = this.heroes.filter(h => h !== hero);
    });
  }
  ngOnDestroy(): void {}
}
