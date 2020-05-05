import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [{
  path: '',
  component: RegisterComponent,
}, {
  path: 'about',
  component: AboutComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
