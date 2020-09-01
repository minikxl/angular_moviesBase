import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent } from './detale/detale.component';


const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'film/:id', component: DetaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
