import { BoughtItem } from './../appModels/boughtItem.model';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import Dexie from 'dexie';


@Injectable()
export class BoughtItemService {
  table: Dexie.Table<BoughtItem, number>;

  constructor(private db: DatabaseService) {
    this.table = this.db.table("boughtItems"); //reference used table
   }

   getAllItems(){
    return this.table.toArray();
  }

  addItem(boughtItem: BoughtItem){
    return this.table.add(boughtItem);
  }

}
