import { NeededItem } from './../appModels/neededItem.model';
import { BoughtItem } from './../appModels/boughtItem.model';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';


@Injectable()
export class DatabaseService extends Dexie{
    neededItems: Dexie.Table<NeededItem, number>;
    boughtItems: Dexie.Table<BoughtItem, number>;
    
  
  constructor() { 
      //db name
      super("supermarketList");
      //tables and indexes
      this.version(1).stores({
        neededItems: '++id',
        boughtItems: '++id',
        });
  }

}
