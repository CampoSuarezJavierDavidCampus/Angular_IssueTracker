import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.css'
})
export class ModalDialogComponent {
  @Input() issueNo:number|null = null;
  @Output() confirm = new EventEmitter<boolean>();
  agree(){
    this.confirm.emit(true);
    this.issueNo=null;
  }
  disagree(){
    this.confirm.emit(false);
    this.issueNo=null;
  }
}
