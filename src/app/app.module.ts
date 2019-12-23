import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkComponent } from './link/link.component';
import { CategoryTitleComponent } from './category-title/category-title.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    CategoryTitleComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
