import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../models/carro.model';
import { CarroService } from '../../services/carro.service';

@Component({
  templateUrl: './carro-details.component.html',
  styleUrls: ['./carro-details.component.scss']
})
export class CarroDetailsComponent implements OnInit {

  carro?: Carro | undefined;

  constructor(
    private activateRoute : ActivatedRoute,
    private carrosService : CarroService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params)=> {
      const carro = this.carrosService.getCarroById(params.id);
      this.carro = carro;
    })
  }

}
