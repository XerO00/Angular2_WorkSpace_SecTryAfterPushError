export class FoodItem{

     public facts:{};

    constructor(
        public id :number,
        public name: string,
        public group?:string,
        public description?:string,
        public servingSize?:string,
        public unit?:string,
        public calories?:string,
        public fat?:string,
        public protein?:string,
        public carbs?:string,
    ){
        this.facts=    {
           'protein':protein,
           'fat':fat,
           'carbs':carbs,
           'calories':calories,
           'servinSize':servingSize
        }   
     }
}
