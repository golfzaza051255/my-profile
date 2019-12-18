import { Component, OnInit } from '@angular/core';
import { Profile, Skills, testBus } from '../shared/models/profile.model';

@Component({
  selector: 'app-test-bus',
  templateUrl: './test-bus.component.html',
  styleUrls: ['./test-bus.component.css']
})
export class TestBusComponent implements OnInit {

  public testBus = testBus;
  public peoples = 'มีคนขึ้น';
  public imga: boolean = false;
  public imgb: boolean = false;
  public imgc: boolean = false;
  public imgd: boolean = false;
  public goa: number = 5;
  public gob: number = 6;
  public goc: number = 7;
  public god: number = 5;
  public count: number = 0;
  public numberCount: number = 50;
  public number: number = 50;
  fix: boolean = false;  
  fixa: boolean = false;
  fixb: boolean = false;
  fixc: boolean = false;
  fixd: boolean = false;
  public people: string = 'คน';

  constructor() { }

  ngOnInit() {
    console.log();
  }

  go() {
    console.log('logggg numberCount ', this.numberCount);

    if (this.count === 0) {
      this.imga = true;
      this.fixa = true;
      this.getOnABnus(this.number, this.goa);
      this.count++;
    } else if (this.count === 1) {
      this.imga = false;
      this.imgb = true;
      this.fixa = false;
      this.fixb = true;
      this.getOnABnus(this.number, this.gob);
      this.count++;
    } else if (this.count === 2) {
      this.imgb = false;
      this.imgc = true;
      this.fixb = false;
      this.fixc = true;
      this.getOnABnus(this.number, this.goc);
      this.count++;
    } else if (this.count === 3) {
      this.imgc = false;
      this.imgd = true;
      this.fixc = false;
      this.fixd = true;
      this.getOnABnus(this.number, this.god);
      this.count++;
    } else if (this.count >= 3) {
      this.imgd = false;
      this.fixd = false;
      this.count = 0;
      this.number = 50;
    }
  }
  getOnABnus(numberCount, number) {
    console.log('logggg numberCount ', this.numberCount);
    this.number = numberCount - number;
    return this.number;
  }
}
