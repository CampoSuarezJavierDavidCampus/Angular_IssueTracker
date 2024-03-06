import { Component, OnInit } from '@angular/core';
import { IssueInterface } from '@domain/interfaces/issue.interface';
import { IssuesService } from '@services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private _issues:IssueInterface[] = [];
  showReportIssue=false;

  constructor(private issueService:IssuesService) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  CloseReport(){
    this.showReportIssue=false;
    this.loadIssues();
  }

  private loadIssues():IssueInterface[]{
    this.Issues = this.pendingIssues;
    return this._issues;
  }

  private set Issues(issues:IssueInterface[]){
    this._issues = issues;
  }
  get Issues():IssueInterface[]{
    return this._issues;
  }

  private get pendingIssues():IssueInterface[]{
    return this.issueService.pendingIssues;
  }


}
