import { Component , Input } from '@angular/core';
// import { TaskComponent } from './task/task.component';
// import { NewTasksComponent } from './new-tasks/new-tasks.component';
// import { type NewTasksData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
  // imports: [TaskComponent , NewTasksComponent ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class TasksComponent{
  @Input ({required :true}) userId!:string;
  @Input ({required :true}) name!:string;
  isAddingTask = false;
  // private taskService = new TasksService();
  // private taskService: TasksService;

  constructor(private tasksService: TasksService){
  //  this.taskService = TasksService;
  }


  // tasks = [
  //   {
  //      id:'t1',
  //      userId:'u1',
  //      title:'Master Angular',
  //      summary:'Learn all the basic and advance features of Angular & How to apply them.',
  //      dueDate:'2025-12-31'
  //   },
  //    {
  //      id:'t2',
  //      userId:'u2',
  //      title:'Build First proty pe',
  //      summary:'Build a first protype of the online shop website',
  //      dueDate:'2024-05-31'
  //   },
  //    {
  //      id:'t3',
  //      userId:'u3',
  //      title:'Prepare tisse template',
  //      summary:'Prepare and describe an issue template which will help with project management',
  //      dueDate:'2024-06-15'
  //   },
  //    {
  //      id:'t4',
  //      userId:'u4',
  //      title:'Prepare tisse template',
  //      summary:'Prepare and describe an management',
  //      dueDate:'2024-06-15'
  //   },
  //   {
  //      id:'t5',
  //      userId:'u5',
  //      title:'tisse template',
  //      summary:'Prepare and describe an issue template which will help with project management',
  //      dueDate:'2024-06-15'
  //   },
  //   {
  //      id:'t6',
  //      userId:'u6',
  //      title:'template',
  //      summary:'Prepare and describe an issue template',
  //      dueDate:'2024-06-15'
  //   },
  // ];

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
    // return this.tasks.filter((task) => task.userId === this.userId);
   }
   
  // onCompleteTask(id:string){
  //   this.tasks=this.tasks.filter((task) => task.id !== id);
  //  }

  onStartAddTask() {
    this.isAddingTask = true;
   }

   onCloseAddTask() {
    this.isAddingTask =false;
   }

  //  onAddTask(taskData:NewTasksData)  {
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId :this.userId,
  //   //   title:taskData.title,
  //   //   summary:taskData.summary,
  //   //   dueDate :taskData.date
  //   // })
  //   this.isAddingTask = false;
  //  }
  }