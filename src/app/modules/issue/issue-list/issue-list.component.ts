import { Component, OnInit } from '@angular/core';
import { IssueInterface } from '@domain/interfaces/issue.interface';
import { IssuesService } from '@services/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues:IssueInterface[] = [];

  constructor(private issueService:IssuesService) {}

  ngOnInit(): void {
    this.issues = this.pendingIssues
  }

  private get pendingIssues():IssueInterface[]{
    return this.issueService.pendingIssues;
  }


}
