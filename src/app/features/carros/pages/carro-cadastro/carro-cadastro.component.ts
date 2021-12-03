import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Carro } from '../../models/carro.model';
import { CarroService } from '../../services/carro.service';

@Component({
  templateUrl: './carro-cadastro.component.html',
  styleUrls: ['./carro-cadastro.component.scss']
})
export class CarroCadastroComponent implements OnInit {

  carro : Carro = this.carrosService.getDefaultCarro();


  carroForm = new FormGroup({
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    ano: new FormControl('', [Validators.required]),
    placa: new FormControl('', [Validators.required]),
    chassi: new FormControl('', [Validators.required]),
    renavam: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    combustivel: new FormControl('', [Validators.required]),
    dataInclusao: new FormControl(this.carro.dataInclusaoSistema),
  });

  constructor(
    private carrosService : CarroService,
    private router : Router) { }

  ngOnInit(): void {
    this.carroForm.controls.dataInclusao.disable();
  }

  createCarro(){
    const FormValue = this.carroForm.value;
    this.carro.marca = FormValue.marca;
    this.carro.modelo = FormValue.modelo;
    this.carro.ano = FormValue.ano;
    this.carro.placa = FormValue.placa;
    this.carro.chassi = FormValue.chassi;
    this.carro.renavam = FormValue.renavam;
    this.carro.cor = FormValue.cor;
    this.carro.combustivel = FormValue.combustivel;

    this.carrosService.createCarro(this.carro);
    alert('Carro adicionado com sucesso!');
    this.router.navigateByUrl('/carros');
  }



}
