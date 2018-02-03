import { NeededItem } from './../appModels/neededItem.model';
import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable()
export class NeededItemService {
  table: Dexie.Table<NeededItem, number>;
  
  constructor(private db: DatabaseService) { 
    this.table = this.db.table("neededItems"); //reference used table
  }

  getAllItems(){
    return this.table.toArray();
  }

  addItem(needItem: NeededItem){
    return this.table.add(needItem);
  }

  removeItem(id: number){
    return this.table.delete(id);
  }
  
}
