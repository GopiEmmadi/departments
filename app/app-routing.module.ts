import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './list/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: ':id', component: EditComponent,
  children:[{ path: ':sid', component: DetailsComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
