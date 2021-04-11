import { CarImage } from "./carImage";

export interface Car{
    carName:string,
    brandName:string,
    dailyPrice:number,
    colorName:string,
    imagePath:string,
    carImages:CarImage[],
    brandId:number,
    colorId:number,
    carId:number,
    modelYear:string,
    description:string,
    status:boolean,
    creditScore:number
}