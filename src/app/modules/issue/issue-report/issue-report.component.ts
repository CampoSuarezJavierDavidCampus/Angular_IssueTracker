import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueInterface } from '@domain/interfaces/issue.interface';
import { IssueFormInterface } from '@domain/interfaces/issueForm.interface';
import { IssuesService } from '@services/issues.service';
import { ObservableInput } from 'rxjs';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent implements OnInit{
  @Output() formClose = new EventEmitter;
  suggestions:IssueInterface[] = [];
  $currentSearch:ObservableInput<string>|null = null;

  issueForm = new FormGroup<IssueFormInterface>({
    title:new FormControl('',{nonNullable:true,validators:Validators.required}),
    description:new FormControl('',{nonNullable:true}),
    priority:new FormControl('',{nonNullable:true,validators:[Validators.pattern('Low|High'),Validators.required]}),
    type:new FormControl('',{nonNullable:true,validators:
      [Validators.pattern('Feature|Bug|Documentation'),Validators.required]})
  })

  constructor(private issueService:IssuesService) {}

  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issueService.getSuggestions(title);
      this.$currentSearch = title.toLocaleLowerCase();
    })
  }

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

  searchMarker(titile:string){
    let inner = (" " + titile).split(" ");



    return inner.reduce((prev,current)=>{
      console.log(current.toLowerCase().includes('add'));
      if (this.$currentSearch && current.toLowerCase().includes(this.$currentSearch as string)) {
        current = `<mark>${current}</mark>`
      }

      return prev + " " + current;
    }) ;
  }
}
