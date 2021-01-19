import { TestBed } from '@angular/core/testing';

import {
  IMessageService,
  MessageServiceProvider,
  MessageServiceToken,
} from './message.service';

describe('MessageService', () => {
  let service: IMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageServiceProvider],
    });
    service = TestBed.get(MessageServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
