import { Component , EventEmitter, Input, Output ,inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { type NewTasksData } from '../task/task.model';
import { TasksService } from '../tasks.service';
// import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-new-tasks',
  standalone:false,
  // imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
  @Input({required:true}) userId! :string;
  @Output() close = new EventEmitter<void>();
// @Output() add= new EventEmitter<NewTasksData>();

 enteredTitle ='';
 enteredSummary='';
 enteredDate='';
 private taskService= inject(TasksService)


  onCancel() {
  this.close.emit();
  }

  onSubmit() {
  // this.add.emit ({
  //  title:this.enteredTitle,
  //  summary:this.enteredSummary,
  //  date:this.enteredDate,
  // })

  this.taskService.addTaskData({
   title:this.enteredTitle,
   summary:this.enteredSummary,
   date:this.enteredDate,
  } ,
    this.userId
  );
   this.close.emit();
  }

}
