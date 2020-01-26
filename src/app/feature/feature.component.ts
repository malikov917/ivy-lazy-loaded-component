import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit, AfterViewInit {
  visible = true;

  constructor() { }

  ngOnInit(): void {
    console.log('ng on init')
  }

  ngAfterViewInit(): void {
    console.log('ng after view init')
  }

  console() {
    this.visible = !this.visible;
    console.log('Stop clicking!!!', this.visible);
  }

}
