import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
    value.map((xy,index)=>{
      
      if(xy.completed){
        console.log(xy.completed);
        
        return value 
      }else{
        console.log('xx',xy.completed);

        return null;
       }
    }) 
    
  }

}
