import { InjectionToken } from '@angular/core';

export interface IMessageService {
  add(message: string): void;
  clear(): void;
}

export const MessageServiceToken = new InjectionToken<IMessageService>(
  'MessageService',
  {
    factory: () => new MessageService(),
  }
);

class MessageService implements IMessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
