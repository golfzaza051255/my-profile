import { Component, OnInit } from '@angular/core';
import { Profile, Skills } from '../shared/models/profile.model';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  public title = 'Profile';
  public profile = Profile;
  public skills = Skills;
  public nameEn: string;
  public nameTh: string;
  public address: string;
  public frontEnd: string;
  public backEnd: string;
  public tools: string;

  constructor(
  ) { }

  ngOnInit() {
    this.nameEn = this.profile.titleNameEn + this.profile.firstNameEn + ' ' + this.profile.lastNameEn;
    this.nameTh = this.profile.titleName + this.profile.firstName + ' ' + this.profile.lastName;
    this.address = this.profile.homeNo + 'หมู่' + this.profile.moo + ' บ้าน' + this.profile.mooBan + ' ตำบล' +
      this.profile.tumbol + ' อำเภอ' + this.profile.amphur + ' จังหวัด' + this.profile.province + ' ' + this.profile.zipCode;
    this.frontEnd = this.skills.frontEnd.angular + ', ' + this.skills.frontEnd.css;
    this.backEnd = this.skills.backEnd.node + ', ' + this.skills.backEnd.ts;
    this.tools = this.skills.tools.git + ', ' + this.skills.tools.node;
  }

}
