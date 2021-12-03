import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarroPageComponent } from './pages/carro-page/carro-page.component';
import { CarroDetailsComponent } from './pages/carro-details/carro-details.component';
import { CarroCadastroComponent } from './pages/carro-cadastro/carro-cadastro.component';
import { CarrosListComponent } from './components/carros-list/carros-list.component';
import { CarroComponent } from './components/carro/carro.component';



@NgModule({
  declarations: [
    CarroPageComponent,
    CarrosListComponent,
    CarroComponent,
    CarroDetailsComponent,
    CarroCadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    CarrosListComponent,
  ]
})
export class CarrosModule { }
