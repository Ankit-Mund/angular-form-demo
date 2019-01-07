import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VendorSolutionComponent } from './components/vendor-solution/vendor-solution.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorSolutionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
