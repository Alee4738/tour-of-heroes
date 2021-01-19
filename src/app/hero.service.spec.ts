import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HeroServiceProvider,
  HeroServiceToken,
  IHeroService,
} from './hero.service';
import { MessageServiceProvider } from './message.service';

describe('HeroService', () => {
  let service: IHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroServiceProvider,
        MessageServiceProvider,
        HttpClient,
        HttpHandler,
      ],
    });

    service = TestBed.get(HeroServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
