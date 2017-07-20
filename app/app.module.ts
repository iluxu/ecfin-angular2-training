import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/primeng';

import { AppComponent } from './app.component'

import { appRoutes } from './routes';

import { CurrencyListComponent } from './currency/currency-list.component';
import { CurrencyTransactionComponent } from './currency/currency-transaction.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    TabMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyListComponent,
    CurrencyTransactionComponent,
    AdminComponent,
    LoginComponent,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
