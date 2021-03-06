import { User } from '../model/interface';
import { Order } from '../orders/models/order';

export interface IMessage {
  _id: string;
  body: string;
  user: User;
  createdAt?: string;
  updatedAt?: string;
}

export class Message implements IMessage {
  _id: string;
  body: string;
  user: User;
  createdAt?: string;
  updatedAt?: string;

  constructor (message: IMessage) {
    this._id = message._id;
    this.body = message.body;
    this.user = new User(message.user);
    this.createdAt = message.createdAt;
    this.updatedAt = message.updatedAt;
  }
}

export enum ThreadStatus {
  OPEN = 0,
  PENDING = 1,
  CLOSED = 2,
};

export interface ThreadCustomer {
  name: string;
  email: string;
}

export interface IThread {
  _id: string;
  messages: Message[];
  order?: string;
  status: ThreadStatus;
  customer: ThreadCustomer;
  createdAt?: string;
  updatedAt?: string;
}

export class Thread implements IThread {
  _id: string;
  messages: Message[];
  order?: string;
  status: ThreadStatus;
  customer: ThreadCustomer;
  createdAt?: string;
  updatedAt?: string;

  constructor(thread: IThread) {
    this._id = thread._id;
    this.messages = thread.messages.map(message => new Message(message));
    this.order = thread.order ? thread.order : null;
    this.status = thread.status;
    this.customer = thread.customer;
    this.createdAt = thread.createdAt;
    this.updatedAt = thread.updatedAt;
  }

  public get lastMessage(): Message {
    return this.messages[this.messages.length - 1];
  }
}

export interface AddMessage {
  threadId: string;
  message: Message;
}
