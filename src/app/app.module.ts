import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VidstackCustomControlsComponent } from './vidstack-custom-controls/vidstack-custom-controls.component';
import { VidstackVideoComponent } from './vidstack-video/vidstack-video.component';
import { VistackEventsComponent } from './vistack-events/vistack-events.component';

@NgModule({
  declarations: [
    AppComponent,
    VidstackVideoComponent,
    VidstackCustomControlsComponent,
    VistackEventsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
