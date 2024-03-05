import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { IssueModule } from '@modules/issue/issue.module';
//*ClarityModule
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //*ClarityModules
    ClarityModule,
    BrowserAnimationsModule,
    //*Own Modules
    IssueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
