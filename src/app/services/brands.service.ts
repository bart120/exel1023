import { Injectable } from '@angular/core';
import { BrandModel } from '../models/brand.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Array<BrandModel>> {
    /*let result: any = [];
    this.http.get<BrandModel[]>(environment.urlBrands).subscribe(obj => {
      result = obj;
      console.log(obj);
      return obj;
    });

    return result;*/

    //return [{ id: 12, name: "test", image: 'test' }, { id: 12, name: "test", image: 'test' }, { id: 12, name: "test", image: 'test' }];

    return this.http.get<BrandModel[]>(environment.urlBrands);


  }

}
