import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VidstackHlsComponent } from './vidstack-hls/vidstack-hls.component';
import { VidstackVideoComponent } from './vidstack-video/vidstack-video.component';
import { VidstackCustomControlsComponent } from './vidstack-custom-controls/vidstack-custom-controls.component';
import { VistackEventsComponent } from './vistack-events/vistack-events.component';

@NgModule({
  declarations: [AppComponent, VidstackHlsComponent, VidstackVideoComponent, VidstackCustomControlsComponent, VistackEventsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
