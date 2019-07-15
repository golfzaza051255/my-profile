import { Component, OnInit } from '@angular/core';
import { Profile } from '../shared/models/profile.model';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {
  title = 'PROFILE';
  public profile = Profile;
  public nameEn: string;
  public nameTh: string;
  constructor(
  ) { }

  ngOnInit() {
    this.nameEn = this.profile.titleNameEn + this.profile.lastNameEn + ' ' + this.profile.lastNameEn;
    this.nameTh = this.profile.titleName + this.profile.lastName + ' ' + this.profile.lastName;
  }

}
