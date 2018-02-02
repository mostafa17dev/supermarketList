import { NeededItem } from './../appModels/neededItem.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NeededInputModalService {
  public neededInputChange = new EventEmitter<NeededItem>();
}