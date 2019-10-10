import { Component, HostListener, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.splitScroll();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }

  splitScroll() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: 900, // half height of section
      triggerElement: '.about-title',
      triggerHook: 0
    }).setPin('.about-title').addTo(controller);
  }
}
