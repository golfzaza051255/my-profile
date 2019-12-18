import { Component, OnInit } from '@angular/core';
import { Profile, Skills, testBus } from '../shared/models/profile.model';

@Component({
  selector: 'app-test-bus',
  templateUrl: './test-bus.component.html',
  styleUrls: ['./test-bus.component.css']
})
export class TestBusComponent implements OnInit {

  public number = testBus;
  public skills = 'ขึ้นได้';
  public imga: boolean = false;
  public imgb: boolean = false;
  public imgc: boolean = false;
  public imgd: boolean = false;
  public count: number = 0;
  constructor() { }

  ngOnInit() {
    console.log();

  }
  go() {
    if (this.count === 0) {
      this.imga = true;
      this.imgd = false;
      this.count++;
    } else if (this.count === 1) {
      this.imga = false;
      this.imgb = true;
      this.count++;
    } else if (this.count === 2) {
      this.imgb = false;
      this.imgc = true;
      this.count++;
    } else if (this.count === 3) {
      this.imgc = false;
      this.imgd = true;
      this.count++;
    } else if (this.count >= 3) {
      this.imgd = false;
      this.count = 0;
    }
  }
}
