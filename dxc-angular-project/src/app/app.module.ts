import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: CarouselComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerobannerComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
