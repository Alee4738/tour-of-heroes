import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HeroServiceToken, IHeroService } from './hero.service';

describe('HeroService', () => {
  let service: IHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });

    service = TestBed.get(HeroServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
