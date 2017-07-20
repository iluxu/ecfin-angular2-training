import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { AppComponent } from './app.component'
import { TabMenuModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

import { appRoutes } from './routes';

import { CurrencyListComponent } from './currency/currency-list.component';
import { CurrencyTransactionComponent } from './currency/currency-transaction.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navbar/navbar.component';
import { CurrenciesDropdownComponent } from './shared/currenciesDropdown.component';
import { LogoutComponent } from './login/logout.component';

import { FixerService } from './services/fixer.service';
import { LoginService } from './services/login.service';

import { RatePipe } from './shared/keys.pipe';

@NgModule({
  imports: [
    BrowserModule,
    TabMenuModule,
    DataTableModule,
    HttpModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    BrowserAnimationsModule,
    DialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyListComponent,
    CurrencyTransactionComponent,
    AdminComponent,
    LoginComponent,
    CurrenciesDropdownComponent,
    LogoutComponent,
    RatePipe
  ],
  providers: [FixerService, LoginService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
