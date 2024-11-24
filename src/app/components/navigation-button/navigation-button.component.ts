import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navigation-button',
  imports:[RouterModule],
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent {
  @Input() buttonText: string = '';
  @Input() link: string = '';
}
