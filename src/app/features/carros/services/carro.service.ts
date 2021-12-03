import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Carro } from '../models/carro.model';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  carros: Array <Carro> =[
    {id: 1, 
      marca: 'Volkswagen',
      modelo: 'Golf',
      placa: 'GSM9753',
      ano: 2020,
      chassi: '9BG116GW04C400001',
      renavam: '123456789',
      cor: 'cinza',
      combustivel: 'gasolina',
      dataInclusaoSistema: '2020-07-01',
    },
    {id: 2, 
      marca: 'Volkswagen',
      modelo: 'Siena',
      placa: 'MKL9777',
      ano: 2019,
      chassi: '9GH116GW04C400009',
      renavam: '987654343',
      cor: 'cinza',
      combustivel: 'flex',
      dataInclusaoSistema: '2019-07-01',
    },
  ]

  constructor() { }

  getCarros(){
    return this.carros;
  }

  getCarroById(id: string){
    return this.carros.find((item)=> item.id === parseInt(id));
  }

  getDefaultCarro(): Carro{
    return{
     id: this.getNextId(),
     marca: '',
     modelo:'',
     placa:'',
     ano:0,
     chassi:'',
     renavam:'',
     cor:'',
     combustivel:'',
     dataInclusaoSistema:moment().format('DD/MM/YYYY'),
    }
  }

  // cria um id 'dinamico'
  getNextId(){
    return (this.carros[(this.carros.length -1)].id +1);
  }

  createCarro(carro : Carro){
    this.carros.push(carro);
  }

}
