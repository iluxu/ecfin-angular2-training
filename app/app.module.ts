import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'

import { appRoutes } from './routes';

import { CurrencyListComponent } from './currency/currency-list.component';
import { CurrencyTransactionComponent } from './currency/currency-transaction.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navbar/navbar.component';

import { FixerService } from './services/fixer.service';

import { RatePipe } from './shared/keys.pipe';

@NgModule({
  imports: [
    BrowserModule,
    TabMenuModule,
    DataTableModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyListComponent,
    CurrencyTransactionComponent,
    AdminComponent,
    LoginComponent,
    RatePipe
  ],
  providers: [FixerService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
