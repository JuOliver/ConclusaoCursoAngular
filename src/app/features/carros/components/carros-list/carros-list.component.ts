import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro.model';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent implements OnInit {

  carros: Array<Carro> =[];
  
  filteredCarros: Array<Carro> =[];
  

  constructor(private carrosService: CarroService) { }

  ngOnInit(): void {
    this.carros = this.carrosService.getCarros();
    this.filteredCarros = this.carros;
  }

  searchByPlaca(event: any){
    const value = event.target.value;
    const filteredCarros = this.carros.filter((carro)=> carro.placa.toUpperCase().search(value.toUpperCase()) > -1);
    this.filteredCarros = filteredCarros;
  }

  searchById(event: any){
    const value = event.target.value;
    const filteredCarros = this.carros.filter((carro)=> carro.id == value);
    if(filteredCarros.length === 0){
      return this.filteredCarros= this.carros;
    }
    return this.filteredCarros = filteredCarros;
  }



}
