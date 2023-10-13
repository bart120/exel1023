import { Observable } from "rxjs";
import { BrandModel } from "./brand.model";

export interface CarModel {
    id: number;
    model: string;
    price: number;
    dateOfCirculation: Date;
    brandID: number;
    brand$?: Observable<BrandModel>;
}