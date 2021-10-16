import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'stringShorter'
})

export class StringShorterPipe implements PipeTransform{
  transform(value: string, noOfChar: number){
    return value.slice(0, noOfChar) + '...';
  }
}