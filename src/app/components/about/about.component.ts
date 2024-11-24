import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';

@Component({
  imports: [RouterModule, NavigationButtonComponent, MatCardModule, MatIconModule],
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {}
