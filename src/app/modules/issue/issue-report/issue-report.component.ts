import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueInterface } from '@domain/interfaces/issue.interface';
import { IssueFormInterface } from '@domain/interfaces/issueForm.interface';
import { IssuesService } from '@services/issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent {
  @Output() formClose = new EventEmitter;

  issueForm = new FormGroup<IssueFormInterface>({
    title:new FormControl('',{nonNullable:true,validators:Validators.required}),
    description:new FormControl('',{nonNullable:true}),
    priority:new FormControl('',{nonNullable:true,validators:[Validators.pattern('Low|High'),Validators.required]}),
    type:new FormControl('',{nonNullable:true,validators:
      [Validators.pattern('Feature|Bug|Documentation'),Validators.required]})
  })

  constructor(private issueService:IssuesService) {}

  addIssue():void{
    if(!this.validateForm())return;
    
    let issue =this.issueForm.getRawValue() as IssueInterface;

    this.createIssue(issue)
    this.formClose.emit();
  }

  validateForm():boolean{
    if(this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched();
      return false;
    }
    return true;
  }

  createIssue(issue:IssueInterface):void{
    this.issueService.createIssue = issue;
  }
}
