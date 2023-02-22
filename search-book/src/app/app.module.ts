import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowWishlistComponent } from './components/show-wishlist/show-wishlist.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { CardComponent } from './components/card/card.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { WishlistItemComponent } from './components/wishlist-item/wishlist-item.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowWishlistComponent,
    SearchBarComponent,
    BooklistComponent,
    CardComponent,
    WishlistComponent,
    NavBarComponent,
    WishlistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
