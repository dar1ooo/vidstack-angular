import { Component } from '@angular/core';

@Component({
  selector: 'app-vistack-events',
  templateUrl: './vistack-events.component.html',
  styleUrls: ['./vistack-events.component.css'],
})
export class VistackEventsComponent {
  public events: string[] = [];

  public eventFired(event: string): void {
    this.events.push(event);
  }
}
