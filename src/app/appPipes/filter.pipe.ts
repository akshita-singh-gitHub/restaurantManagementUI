import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform   {

  transform(value: any, searchTerm: any): any {
      // console.log(value)
    return value.filter(function(search:any){
return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}