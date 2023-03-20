import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';


const routes: Routes = [{path:"Home", component:HomeComponent},
{path:"Medicine", component:MedicineHomeComponent},
{path:"TopDeal", component:TopDealsComponent},
{path:"", redirectTo:"/Home", pathMatch:'full'},
{path:"**", component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
