import { AfterContentInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RevealComponent} from './reveal/reveal.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'intro2ng';
}
