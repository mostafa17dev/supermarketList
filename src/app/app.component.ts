import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Supermarket List';
  displayedColumns = ['position', 'name'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];


}

export interface Element {
  name: string;
  position: number;

}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
 
];



