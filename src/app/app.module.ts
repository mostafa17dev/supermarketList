import { NeededInputModalService } from './services/needed-input-modal.service';
import { NeededItemService } from './services/needed-item.service';
import { BoughtItemService } from './services/bought-item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NeededInputModalComponent } from './needed-input-modal/needed-input-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NeededInputModalComponent
  ],
  entryComponents: [
    NeededInputModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [NeededItemService,BoughtItemService,NeededItemService,NeededInputModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
