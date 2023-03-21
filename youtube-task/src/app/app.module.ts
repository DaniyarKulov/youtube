import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from './core/header/header.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CoreModule,
    HttpClientModule,
    YoutubeModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
})
export class AppModule {}
