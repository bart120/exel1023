import { Injectable } from '@angular/core';
import { BrandModel } from '../models/brand.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, mergeMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  getBrands(): Observable<Array<BrandModel>> {
    /*let result: any = [];
    console.log('début getBrands', result);
    this.http.get<BrandModel[]>(environment.urlBrands).subscribe(obj => {
      result = obj;
      console.log('retour obs', obj);
      return obj;
    });

    console.log('fin getBrands', result);
    return result;*/

    //return [{ id: 12, name: "test", image: 'test' }, { id: 12, name: "test", image: 'test' }, { id: 12, name: "test", image: 'test' }];

    //const obsTimer = timer(0, 3000);
    /*obsTimer.subscribe(obj => {
      console.log('time', obj);
    });*/

    /*const obsData = this.http.get<BrandModel[]>(environment.urlBrands);

    const superObs = obsTimer.pipe(mergeMap(() => obsData));
    return superObs;*/

    return timer(0, 3000).pipe(mergeMap(() => this.http.get<BrandModel[]>(environment.urlBrands).pipe(map(tab => tab.sort((a, b) => a.name < b.name ? -1 : 1)))));
    //return this.http.get<BrandModel[]>(environment.urlBrands);


  }

}
