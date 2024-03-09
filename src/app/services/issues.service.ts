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

  getSuggestions(title:string):IssueInterface[]{
    if(title.length < 3)return [];

    let titleWords = title.toLocaleLowerCase().split(" ");

    return this.issues.filter(iss => {
      let issueWords = iss.title.toLocaleLowerCase().split(" ");

      let included:boolean = false;
      titleWords.forEach(tw => {
        if(tw.length<=1) return;
        for (let i = 0; i < issueWords.length; i++) {
          const iw = issueWords[i];
          if(iw.length<1 || tw.length<1)continue;
          if(iw.startsWith(tw)){
            included = true;
            return;
          }
        }
      });
      return included;
    });

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
