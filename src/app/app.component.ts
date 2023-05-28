import { Component, OnInit } from '@angular/core';
import { defineCustomElements } from 'vidstack/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    defineCustomElements();
  }
}
