import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'stringShorter'
})

export class StringShorterPipe implements PipeTransform{
  transform(value: string, noOfChar: number){
    if(value.trim().length <= noOfChar){
      return value;
    }
    return value.slice(0, noOfChar) + '...';
  }
}