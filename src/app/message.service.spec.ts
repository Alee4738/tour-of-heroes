import { TestBed } from '@angular/core/testing';

import { IMessageService, MessageServiceToken } from './message.service';

describe('MessageService', () => {
  let service: IMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageServiceToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
