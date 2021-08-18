import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEventComponent} from "./views/create-event/create-event.component";

const routes: Routes = [
    { path: 'create', component: CreateEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
