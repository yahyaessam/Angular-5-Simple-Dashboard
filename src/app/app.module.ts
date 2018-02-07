import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Kindo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
// Layout
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
// Main application pages
import { DashboardComponent } from './main-pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './main-pages/add-employee/add-employee.component';
import { SearchEmployeeComponent } from './main-pages/search-employee/search-employee.component';
import { NotFoundComponent } from './main-pages/not-found/not-found.component';
// directives
import { DropDownDirective } from './directives/drop-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    // Kindo Modules
    ButtonsModule,
    // Routes
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: 'search', component: SearchEmployeeComponent },
      { path: '404', component: NotFoundComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: '404' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
