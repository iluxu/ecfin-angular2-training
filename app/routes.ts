import {Routes} from '@angular/router'
import {CurrencyListComponent} from './currency/currency-list.component'
import {CurrencyTransactionComponent} from './currency/currency-transaction.component'
import {AdminComponent} from './admin/admin.component'
import {LoginComponent} from './login/login.component'

export const appRoutes = [

{ path: 'currencyList', component : CurrencyListComponent},
{ path: 'currencyTransaction', component : CurrencyTransactionComponent},
{ path: 'admin', component : AdminComponent},
{ path: 'login', component : LoginComponent},
{ path : '', redirectTo: '/currencyList', pathMatch: 'full'}

]