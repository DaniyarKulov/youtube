import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { YoutubeInterceptor } from './youtube/module/youtube.interceptor';

@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
  ],
})
export class AppModule {}
