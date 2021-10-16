import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
  name: 'tagConverter'
})
export class TagConverterPipe implements PipeTransform{
  transform(value: any){
    const tagsObj = value;
    const tags = [];
    for (let tagObj of tagsObj){
        tags.push('#'+tagObj.tag_text)
    }
    return tags.join(' ');
  }
}