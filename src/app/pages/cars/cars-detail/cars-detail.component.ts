import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styles: [
  ]
})
export class CarsDetailComponent implements OnInit {

  id?: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }



}
