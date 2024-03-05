import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent } from './issue-list/issue-list.component';
//*ClarityModule
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    IssueListComponent
  ],
  imports: [
    CommonModule,
    //*ClarityModules
    ClarityModule,
    BrowserAnimationsModule,
  ],
  exports:[
    IssueListComponent
  ]
})
export class IssueModule { }
