import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { FilterPipe } from '../../filter.pipe';
// Main Layout
import { LayoutComponent } from './layout.component';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// main pages
import { DashboardComponent } from '../../main-pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from '../../main-pages/add-employee/add-employee.component';
import { SearchEmployeeComponent } from '../../main-pages/search-employee/search-employee.component';
// Fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// Kindo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DateInputModule } from '@progress/kendo-angular-dateinputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        // FontAwesome
        AngularFontAwesomeModule,
        // Kindo Modules
        ButtonsModule,
        DialogsModule,
        LayoutModule,
        DateInputModule,
        DateInputsModule,
        DatePickerModule,
        InputsModule,
        DropDownsModule,
        RippleModule,
        GridModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        MenuComponent,
        HeaderComponent, 
        FooterComponent,
        DashboardComponent,
        AddEmployeeComponent,
        SearchEmployeeComponent,
        FilterPipe
        ]
})
export class MainLayoutModule { }
