import { BoughtInputModalService } from './services/bought-input-modal.service';
import { NeededInputModalService } from './services/needed-input-modal.service';
import { NeededItemService } from './services/needed-item.service';
import { BoughtItemService } from './services/bought-item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NeededInputModalComponent } from './needed-input-modal/needed-input-modal.component';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './services/database.service';
import { NgDragDropModule } from 'ng-drag-drop';
import { BoughtInputModalComponent } from './bought-input-modal/bought-input-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    NeededInputModalComponent,
    BoughtInputModalComponent
  ],
  entryComponents: [
    NeededInputModalComponent,
    BoughtInputModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [NeededItemService,BoughtItemService,NeededItemService,NeededInputModalService,DatabaseService,BoughtInputModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
