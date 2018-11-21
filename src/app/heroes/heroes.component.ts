import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  @Output() heroSelected: EventEmitter<Hero> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    // emit the hero selected
    this.heroSelected.emit(hero);
  }


}