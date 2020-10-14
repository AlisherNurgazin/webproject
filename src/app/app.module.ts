import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/navbar/nav.component';
import {SearchComponent} from './components/search/search.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AboutComponent} from './components/about/about.component';
import {FooterComponent} from './components/footer/footer.component';
import {NewsComponent} from './components/news/news.component';
import {HighlightDirective} from './components/news/highlight.directive';
import { FormatPipe } from './format.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    LayoutComponent,
    AboutComponent,
    FooterComponent,
    NewsComponent,
    HighlightDirective,
    FormatPipe,
    LoginPageComponent,
    HomePageComponent,
    ProductsComponent,
    ContactPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
