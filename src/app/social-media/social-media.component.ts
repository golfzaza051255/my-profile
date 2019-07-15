import { Component, OnInit } from '@angular/core';
import { Profile, Skills } from '../shared/models/profile.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  public title = 'Social Media';
  public profile = Profile;
  public skills = Skills;

  constructor() { }

  ngOnInit() {
  }

}
