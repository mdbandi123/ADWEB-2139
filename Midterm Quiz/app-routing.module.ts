import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: "emplist1", pathMatch: "full" },
  { path: "emplist1", component: Emplist1Component },
  { path: "emplist2", component: Emplist2Component },
  { path: "emplist3", component: Emplist3Component },
  { path: "**", component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
