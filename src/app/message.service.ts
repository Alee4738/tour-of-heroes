import { InjectionToken, Provider } from '@angular/core';

export interface IMessageService {
  add(message: string): void;
  clear(): void;
}

class MessageService implements IMessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

export const MessageServiceToken = new InjectionToken<IMessageService>(
  'MessageService'
);

export const MessageServiceProvider: Provider = {
  provide: MessageServiceToken,
  useClass: MessageService,
};
