import { BoughtInputModalService } from './services/bought-input-modal.service';
import { BoughtInputModalComponent } from './bought-input-modal/bought-input-modal.component';
import { BoughtItem } from './appModels/boughtItem.model';
import { NeededItemService } from './services/needed-item.service';
import { DatabaseService } from './services/database.service';
import { NeededInputModalService } from './services/needed-input-modal.service';
import { NeededItem } from './appModels/neededItem.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NeededInputModalComponent } from './needed-input-modal/needed-input-modal.component';
import { DropEvent } from 'ng-drag-drop';
import { BoughtItemService } from './services/bought-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'Supermarket List';
  neededItems: NeededItem[];
  boughtItems: BoughtItem[];
  addedBoughtItem: BoughtItem;
  
  constructor(private modalService: NgbModal, public neededInputModalSercive: NeededInputModalService, private neededItemService: NeededItemService, private boughtItemService: BoughtItemService, private boughtInputModalService: BoughtInputModalService) {
  }

  ngOnInit(){
    // get all neededItems from db
    this.neededItemService.getAllItems().then( 
      neededItems => this.neededItems = neededItems);

    // get all boughtItems from db
    this.boughtItemService.getAllItems().then(
      boughtItems => this.boughtItems =boughtItems);

    // recieved needed item input from child component(modal)
    this.neededInputModalSercive.neededInputChange.subscribe((neededItem)=>{
      this.neededItemService.addItem(neededItem);
      this.neededItems.push(neededItem);
    });

   // recieved price from child component(modal)
   this.boughtInputModalService.neededPriceChange.subscribe((oneUnitItemPrice)=>{
    this.addedBoughtItem.priceOfOne =  oneUnitItemPrice;
    this.addedBoughtItem.totalPrice = this.addedBoughtItem.priceOfOne * this.addedBoughtItem.quantity;
  });

  }

  openNeededInputModal(){
    this.modalService.open(NeededInputModalComponent) ;
  }

  // on dropping item
  onItemsDrop(e: DropEvent){
    this.addedBoughtItem = e.dragData;
    // open modal to enter price for one unit
    this.modalService.open(BoughtInputModalComponent).result.then(result =>{ 
      this.boughtItemService.addItem(this.addedBoughtItem).then(()=>{
        this.boughtItems.push(this.addedBoughtItem);
      });
      
      this.neededItemService.removeItem(this.addedBoughtItem.id).then(()=>{
        // remove item from neededItems Dom(view)
        this.neededItems = this.neededItems.filter((item)=> item.id != this.addedBoughtItem.id);
      });
      
    });
    
  }

}



