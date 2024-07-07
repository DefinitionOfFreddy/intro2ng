import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Zoom from 'reveal.js/plugin/zoom/zoom'
import * as mermaid from 'mermaid'

@Component({
  selector: 'app-reveal',
  standalone: true,
  imports: [],
  templateUrl: './reveal.component.html',
  styleUrl: './reveal.component.scss'
})
export class RevealComponent implements OnInit {
  @ViewChild('mermaid') mermaidDiv ?: ElementRef
  deck ?: Reveal.Api

  showgif = false

  ngOnInit(): void {
    this.deck = new Reveal({
      plugins: [Markdown, RevealHighlight, Zoom]
    });
    this.deck.initialize().then();

    mermaid.default.initialize({
      startOnLoad: true,
      theme: 'dark',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'cardinal',
      },
      securityLevel: 'loose',
    });
    mermaid.default.init();

    
  }

  ngAfterViewInit(): void {

    const element: any = this.mermaidDiv?.nativeElement;
    const graphDefinition = `timeline
					2006 : jQuery
					2009 : Node.js
					2010 : AngularJS
						 : npm
					2013 : React 1.0
					2014 : Typescript 1.0
					2016 : Angular 2.0
					2024 : Angular 18
						 : React 18
						 : Vue.js 3.4.0
    `;

    mermaid.default.render('graphDiv', graphDefinition).then(
      value => {
        element.innerHTML = value.svg
        value.bindFunctions?.(element)
      }
    );

  }


  domHtml = `<!DOCTYPE html>
<html>
  <body>
    <h1>HTML DOM Events</h1>
    <h2>The onclick Event</h2>

    <p>The onclick event triggers a function when an lelement is clicked on.</p>
    <p>Click to trigger a function that will output "Hello World":</p>

    <button onclick="myFunction()">Click me</button>

    <p id="demo"></p>

    <script>
      function myFunction() {
        document.getElementById('demo').innerHTML = 'Hello World';
      }
    </script>
  </body>
</html>`

}
