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
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CanactGuard} from './canact/canact.guard';
import {ExitAboutGuard} from './exit.about.guard';
import {GamesCreateComponent } from './games-create/games-create.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './games-list/games-list.component';
import {AuthModule} from './auth/auth.module';
import {AuthModuleModule} from './auth/auth-module.module';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact',
    component: ContactPageComponent,
    canActivate: [CanactGuard]},
  {path: 'create-games', component: GamesCreateComponent },
  {path: 'games-list', component: GamesListComponent }
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
    HomePageComponent,
    ProductsComponent,
    ContactPageComponent,
    GamesCreateComponent,
    GamesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AuthModuleModule
  ],
  providers: [ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
