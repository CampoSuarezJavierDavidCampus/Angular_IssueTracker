import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IssueInterface } from '@domain/interfaces/issue.interface';
import { IssueFormInterface } from '@domain/interfaces/issueForm.interface';
import { IssuesService } from '@services/issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent {
  issueForm = new FormGroup<IssueFormInterface>({
    title:new FormControl('',{nonNullable:true}),
    description:new FormControl('',{nonNullable:true}),
    priority:new FormControl('',{nonNullable:true}),
    type:new FormControl('',{nonNullable:true})
  })

  constructor(private issueService:IssuesService) {}

  addIssue():void{
    let issue =this.issueForm.getRawValue() as IssueInterface;
    this.createIssue(issue)

  }

  createIssue(issue:IssueInterface):void{
    this.issueService.createIssue = issue;
  }
}
