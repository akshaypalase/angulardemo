import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
   filterarray=[]
  show=false;
  datta=true;
  index;
  isDisabled=true;
  dataSource=[];
  x;
  y;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data){
    if(this.datta){
      this.dataSource.push({taskname:data.taskname,date:data.date,completed:false})
    }else{
      this.dataSource[this.index]={taskname:data.taskname,date:data.date,completed:false}
      console.log(this.dataSource[this.index]);
      this.datta=true;
    }
  }
  taskpending(i){
     if(this.dataSource[i].completed){
      this.dataSource[i].completed=false;
     }else{
       this.dataSource[i].completed=true;
     }
  }
  deleteTask(i){
    this.dataSource.splice(i,1)
    console.log(this.dataSource);
  }
  editTask(i){
    this.index=i
    this.x=this.dataSource[i].taskname
    this.y=this.dataSource[i].date
   console.log(this.x,this.y);
   this.datta=false;
  }

  onCompleted(){
    this.show=true;
    console.log(this.dataSource);
    this.filterarray=this.dataSource;
  }
}
