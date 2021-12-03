import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroCadastroComponent } from './features/carros/pages/carro-cadastro/carro-cadastro.component';
import { CarroDetailsComponent } from './features/carros/pages/carro-details/carro-details.component';
import { CarroPageComponent } from './features/carros/pages/carro-page/carro-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'carros'},
  {path:'carros', component: CarroPageComponent},
  {path:'carro-details/:id', component: CarroDetailsComponent},
  {path:'carro-cadastro', component: CarroCadastroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
