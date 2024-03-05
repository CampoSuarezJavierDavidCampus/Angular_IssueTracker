import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//*ClarityModule
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IssueModule } from '@modules/issue/issue.module';

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
