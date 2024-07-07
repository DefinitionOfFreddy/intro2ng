import { Routes } from '@angular/router';
import { RevealComponent } from './reveal/reveal.component';

export const routes: Routes = [
    { path: '**', component: RevealComponent },  // Wildcard
];
