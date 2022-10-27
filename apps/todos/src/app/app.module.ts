import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {authRoutes, GreeterModule} from '@myorg/greeter';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
    RouterModule.forRoot([{path: 'greeter', children: authRoutes}],),
    GreeterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
