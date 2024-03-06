import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IssueFormInterface } from '@domain/interfaces/issueForm.interface';

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
}
