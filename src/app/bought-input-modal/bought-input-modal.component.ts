import { BoughtInputModalService } from './../services/bought-input-modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bought-input-modal',
  templateUrl: './bought-input-modal.component.html',
  styleUrls: ['./bought-input-modal.component.css']
})
export class BoughtInputModalComponent implements OnInit {
  price: number;
  errorMessage: string;
  constructor(public activeModal: NgbActiveModal, private boughtInputModalService: BoughtInputModalService) { }

  ngOnInit() {
  }

   // send price to parent component
  sendPrice(){
    if(this.price != null){ // check if the user entered price
      this.boughtInputModalService.neededPriceChange.emit(this.price);
      this.activeModal.close(); //close modal
    }
    else if(this.price== null ){
      this.errorMessage = "Item Price missing";
    }    
  }

}
