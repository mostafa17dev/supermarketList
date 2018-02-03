import { NeededInputModalService } from './../services/needed-input-modal.service';
import { NeededItem } from './../appModels/neededItem.model';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-needed-input-modal',
  templateUrl: './needed-input-modal.component.html',
  styleUrls: ['./needed-input-modal.component.css']
})
export class NeededInputModalComponent  {
  neededItem: NeededItem = {};
  errorMessage: string;
  
  constructor(public activeModal: NgbActiveModal, public neededInputModalSercive: NeededInputModalService) { }
  
  // send needed item object to parent component
  sendNeededItem(){ 
    if(this.neededItem.name != null && this.neededItem.quantity != null &&  this.neededItem.name !=""){ // check if the user entered name and quantity
      this.neededInputModalSercive.neededInputChange.emit(this.neededItem);
      this.activeModal.close(); //close modal
    }
    else if(this.neededItem.name == null || this.neededItem.name ==""){
      this.errorMessage = "Item Name missing";
    }
    else if(this.neededItem.quantity == null ){
      this.errorMessage = "Item Quantity missing";
    }
  } 

}
