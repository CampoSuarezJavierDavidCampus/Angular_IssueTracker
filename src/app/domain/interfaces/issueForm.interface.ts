import { FormControl } from "@angular/forms";

export interface IssueFormInterface{
  title:FormControl<string>;
  description:FormControl<string>;
  priority:FormControl<string>//'Low'|'High'>,
  type:FormControl<string>//'Feature'|'Bug'|'Documentation'>,
}