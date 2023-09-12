import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  
  dataSource=[
  ];
  x;
  y;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data){
    console.log(data);
    this.dataSource.push({taskname:data.taskname,date:data.date,completed:false})
    console.log(this.dataSource);
    
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
    this.x=this.dataSource[i].taskname
    this.y=this.dataSource[i].date
   console.log(this.x,this.y);
   
  }
}
