import { NeededItem } from './../appModels/neededItem.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-needed-input-modal',
  templateUrl: './needed-input-modal.component.html',
  styleUrls: ['./needed-input-modal.component.css']
})
export class NeededInputModalComponent implements OnInit {
  neededItem: NeededItem = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  saveItem(){
    console.log(this.neededItem);
    if(this.neededItem.name != null && this.neededItem.quantity != null){
      this.activeModal.close();
    }
  }

  sendNeededItem(){

  }
  

}
