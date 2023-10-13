import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, mergeMap } from "rxjs";
import { CarModel } from "../models/car.model";
import { environment } from "src/environments/environment";
import { BrandsService } from "./brands.service";

@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(private http: HttpClient, private brandServ: BrandsService) {

    }

    getCars(): Observable<Array<CarModel>> {
        return this.http.get<Array<CarModel>>(environment.urlCars).pipe(map(data => {
            data.forEach(x => x.brand$ = this.brandServ.getBrandById(x.brandID));
            return data;
        }));
    }

    saveCar(car: CarModel): Observable<CarModel> {
        car.price = +car.price;
        return this.http.post<CarModel>(environment.urlCars, car);
    }
}