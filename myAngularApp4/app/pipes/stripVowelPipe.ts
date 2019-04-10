import {Pipe, PipeTransform} from '@angular/core';

/*
strips all the vowels from strin
*/
@Pipe ({
  name :'stripVowel'
})

export class StripVowelPipe implements PipeTransform {

    transform(value: string) : string{
        if(!value){
            return "";
        }
        var stripped="";
        for(var i=0; i< value.length ; ++i){
            var ch= value.charAt(i).toLowerCase();
            if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
            {
                continue;
            }
            else
            {
             stripped=stripped.concat(ch);
            }
        }
        return stripped;
    }
}