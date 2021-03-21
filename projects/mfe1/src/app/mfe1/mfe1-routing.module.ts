import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1Component } from './mfe1.component';

const routes: Routes = [{ component: Mfe1Component, path: '' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }
