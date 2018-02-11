import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterName: string, filterDepartment:string): any {
    if ( value.length === 0 || filterName == '') {
      return value;
    }
    const resultArray = [];
    for ( const item of value.data) {
      filterName = filterName.toLowerCase();
      if (((item.name.toLowerCase()).indexOf(filterName) > -1 && filterDepartment == '') || ((item.name.toLowerCase()).indexOf(filterName) > -1 && item.department == filterDepartment) || ((filterName == '') && item.department == filterDepartment))  {
        resultArray.push(item);
      }
      // if(item.name.includes(filterName)) {
      //   resultArray.push(item)
      // }
    }
    return resultArray;
  }

}
