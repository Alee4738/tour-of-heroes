import { Component, Inject, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroServiceToken, IHeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  private heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(@Inject(HeroServiceToken) private heroService: IHeroService) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if safe as previous term
      distinctUntilChanged(),

      // switch to new search observable every time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
