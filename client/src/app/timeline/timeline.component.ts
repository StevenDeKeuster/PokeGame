import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  datum:Date;

  constructor() { }

  ngOnInit() {
    this.datum = new Date(1992, 0, 15);
  }

}
