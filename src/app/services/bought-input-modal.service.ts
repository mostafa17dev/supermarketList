import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class BoughtInputModalService {
  public neededPriceChange = new EventEmitter<number>();
}
