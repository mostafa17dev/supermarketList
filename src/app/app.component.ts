import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NeededInputModalComponent } from './needed-input-modal/needed-input-modal.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Supermarket List';

  constructor(private modalService: NgbModal) {}

  openNeededInputModal(){
    this.modalService.open(NeededInputModalComponent);
  }
 
}



