import { Component, OnInit } from '@angular/core';
import { Skills } from '../shared/models/profile.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public textReverse = '';
  public dog;
  public bird;
  public text;
  constructor() { }

  ngOnInit() {
    const data = 'aa bb cc dd';
    const x = 35;
    const y = 94;
    const a = 3;
    const b = 4;
    this.testReverse(data);
    this.testLong(x, y);
    this.testText(a, b);
  }


  testReverse(data: string) {
    return this.textReverse = data.split('').reverse().join('');
  }

  testLong(x, y) {
    this.dog = (y - (x * 2)) / 2;
    this.bird = x - this.dog;
  }

  testText(x, y) {

  }

}
