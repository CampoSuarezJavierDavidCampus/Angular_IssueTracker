import {  NgModule } from '@angular/core';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueReportComponent } from './issue-report/issue-report.component';
//*ClarityModule
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IssueListComponent,
    IssueReportComponent
  ],
  imports: [
    //*ClarityModules
    ClarityModule,
    BrowserAnimationsModule,
    //*Reactive Forms
    ReactiveFormsModule

  ],
  exports:[
    IssueListComponent
  ]
})
export class IssueModule { }
