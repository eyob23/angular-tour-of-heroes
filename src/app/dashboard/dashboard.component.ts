import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HeroService } from './../hero.service';
import { InMemoryDataService } from './../in-memory-data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  id: number;
  constructor(
    private heroService: HeroService,
    private inMemoryService: InMemoryDataService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));

    // this.id = this.inMemoryService.genId()
  }
}
