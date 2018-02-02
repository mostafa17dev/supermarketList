import { NeededInputModalService } from './services/needed-input-modal.service';
import { NeededItem } from './appModels/neededItem.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NeededInputModalComponent } from './needed-input-modal/needed-input-modal.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Supermarket List';
  neededItem: NeededItem;

  constructor(private modalService: NgbModal, public neededInputModalSercive: NeededInputModalService) {}

  ngOnInit(){
    // recieved from child component(modal)
    this.neededInputModalSercive.neededInputChange.subscribe((neededItem)=>{
      this.neededItem = neededItem;
      console.log(this.neededItem);
    });
  }

  openNeededInputModal(){
    this.modalService.open(NeededInputModalComponent) ;
  }

}



