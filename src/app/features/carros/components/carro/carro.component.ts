import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from '../../models/carro.model';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {

  @Input()
  card ?: Boolean;

  @Input()
  carro?: Carro;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  carrosDetails(){
    this.router.navigateByUrl(`carro-details/${this.carro?.id}`);
  }

}
