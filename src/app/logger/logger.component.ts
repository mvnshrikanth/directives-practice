import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  // styleUrls: ['./logger.component.css']
  styles: [`.fivth{color:white;}`]
})
export class LoggerComponent implements OnInit {

  detailsToggle: boolean = false;
  
  toggleDetails = [];

  constructor() { }

  buttonClicked() {
    this.detailsToggle = !this.detailsToggle;
    
    this.toggleDetails.push(new Date);
  }

  ngOnInit() {
  }

}
