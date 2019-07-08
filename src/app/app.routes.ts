import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { DetailComponent } from './+detail/detail.component';

export const ROUTES: Routes = [
  { path: 'about', component: AboutComponent }
];
