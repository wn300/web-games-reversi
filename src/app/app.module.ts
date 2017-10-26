import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { BodyComponent } from './page/body/body.component';
import { ReversiComponent } from './games/reversi/reversi.component';
import { PageComponent } from './page/page.component';

//service
import { reversiService } from './services/reversi.service';

//routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ReversiComponent,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    FormsModule
  ],
  providers: [reversiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
