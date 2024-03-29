
export interface IssueInterface {
  issueNo:number;
  title:string;
  description:string;
  priority:'Low'|'High',
  type:'Feature'|'Bug'|'Documentation',
  completed?:Date;
}
