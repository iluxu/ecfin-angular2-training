import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'currencyRate'})
export class RatePipe implements PipeTransform {
  transform(value, args?:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({currency: key, rate: value[key]});
    }
    return keys;
  }
}

/*export class UserPipe implements PipeTransform {
  transform(value, args?:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({username: key, keycode: value[key]});
    }
    return keys;
  }
}*/