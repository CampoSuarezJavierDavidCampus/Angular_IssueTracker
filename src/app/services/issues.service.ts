import { Injectable } from '@angular/core';
import { IssueInterface } from '@domain/interfaces/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues:IssueInterface[] = [];
  constructor() { }
  get pendingIssues():IssueInterface[]{
    return this.issues.filter(issue => !issue.completed);
  }
}
