import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/auth-guard.guard';
import { DashboardComponent } from './main-pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './main-pages/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './main-pages/search-employee/search-employee.component';
import { NotFoundComponent } from './main-pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout/main-layout.module#MainLayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
