import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { NavBarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { CurrencyListComponent } from './currency/currency-list.component';
import { CurrencyTransactionComponent } from './currency/currency-transaction.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CurrenciesDropdownComponent } from './shared/currenciesDropdown.component';
import { LogoutComponent } from './login/logout.component';
import { FixerService } from './services/fixer.service';
import { LoginService } from './services/login.service';
import { RatePipe } from './shared/keys.pipe';
import { DropdownModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    TabMenuModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    DataListModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CurrencyListComponent,
    CurrencyTransactionComponent,
    CurrenciesDropdownComponent,
    AdminComponent,
    LoginComponent,
    LogoutComponent,
    RatePipe,
  ],
  providers: [FixerService, RatePipe, LoginService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
