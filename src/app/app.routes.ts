import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DeshboardComponent } from './Pages/deshboard/deshboard.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { VehiclesComponent } from './Pages/vehicles/vehicles.component';

export const routes: Routes = [

{
    path : '',
    redirectTo:'login',
    pathMatch:'full'
},
{
    path:'login',
    component: LoginComponent
},
{
     path:'',
     component:LayoutComponent,
     children:[
        {
            path:'deshboard',
            component: DeshboardComponent
        },
        {
            path:'vehicles',
            component:VehiclesComponent
        },
        {
            path:'booking',
            component:BookingComponent
        }
     ]
},
];
