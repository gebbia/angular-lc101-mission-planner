import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiment: object = ["Mars soil sample", "Plant growth in habitat", "Human bone density"]

  // experimentBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }



 }
