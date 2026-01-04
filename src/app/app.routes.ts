import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' }, // default route
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallback for unknown routes
];