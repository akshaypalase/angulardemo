import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  Course: any[] = ['Angular', 'React', 'Vue', 'Javascript'];

  obj = {
    name: 'akshay',
    id: 101
  }


  data: string = 'Angular Batch B7';

  getDataFromChild(value) {
    console.log(value);

  }
  getCourseName(data1) {
    console.log(data1)
  }

}
