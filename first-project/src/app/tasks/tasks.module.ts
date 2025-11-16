import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
 declarations:[ TasksComponent,TaskComponent,  NewTasksComponent],
 exports:[TasksComponent],
 imports:[CommonModule,FormsModule, SharedModule]
})

export class TasksModule{

}