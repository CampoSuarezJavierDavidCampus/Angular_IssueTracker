import { IssueTypeEnum } from "@domain/enums/issueType.enum";
import { PriorityEnum } from "@domain/enums/priority.enum";


export interface IssueInterface {
  issueNo:number;
  titile:string;
  description:string;
  priority:PriorityEnum,
  type:IssueTypeEnum,
  completed?:Date;
}
