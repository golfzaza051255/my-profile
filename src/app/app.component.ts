import { Component } from '@angular/core';
import { Profile } from './shared/models/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public profile = Profile;
}
