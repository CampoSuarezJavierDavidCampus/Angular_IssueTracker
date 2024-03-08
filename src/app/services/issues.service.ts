import { Injectable } from '@angular/core';
import { IssueInterface } from '@domain/interfaces/issue.interface';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues:IssueInterface[] = [
    {
      issueNo:1,
      title:'Add email validation inregistrationform',
      description:'Validate the email entered in the user registration form',
      priority:'High',
      type:'Feature',
    },{
      issueNo:2,
      title:'Display the addres details of the costumer',
      description:'Add a column to display the details of the costumer addres in the costumer list',
      priority:'Low',
      type:'Feature',
    },{
      issueNo:3,
      title:'Export to CSV is no working',
      description:'The export process of a report into CSV format throws an error',
      priority:'High',
      type:'Bug',
    },{
      issueNo:4,
      title:'Locale settings per user',
      description:'Add settings configure the locale of the current user',
      priority:'Low',
      type:'Feature',
    },{
      issueNo:5,
      title:'Documentation',
      description:'Create a tutorial on how to add a new costumer into the application',
      priority:'High',
      type:'Documentation',
    }
  ];

  constructor() { }

  get pendingIssues():IssueInterface[]{
    return this.issues.filter(issue => !issue.completed);
  }

  getSuggestions(titile:string):IssueInterface[]{
    if(titile.length < 3)return [];
    return this.issues.filter(issue => issue.title.toLocaleLowerCase().includes(titile.toLocaleLowerCase()));
  }

  set completeIssue(issue:IssueInterface){
    let selectedIssue:IssueInterface = {
      ...issue,
      completed: new Date()
    }
    const index = this.issues.findIndex(iss => iss===issue)
    this.issues[index] = selectedIssue;
  }

  set createIssue(issue:IssueInterface){
    issue.issueNo=this.issues.length +1;
    this.issues.push(issue)
  }
}
