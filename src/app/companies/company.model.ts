import { Product } from '../shared/product.model';

export class Company {
    name: string;
    numberofEmployee: number;
    address: string;
    imgPath: string;
    establishmentDay: Date;
    products: Product[]

    constructor(name: string, noe: number, address: string, imgPath:string, esDay:Date, products: Product[]){
        this.name=name;
        this.numberofEmployee = noe;
        this.address = address;
        this.imgPath = imgPath;
        this.establishmentDay = esDay;
        this.products = products;
    }
  }
  