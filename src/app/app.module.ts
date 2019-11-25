import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { VentanaComponent } from './ventana/ventana.component';
import { SegundoComponent } from './segundo/segundo.component';
import { EventosComponent } from './eventos/eventos.component';
import { DatosService } from './datos.service';
import { AcercaComponent } from './acerca/acerca.component';
import { HomeComponent } from './home/home.component';

const routes : Route[] = [
{path: '', component: HomeComponent},
{path: 'acerca', component: AcercaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    VentanaComponent,
    SegundoComponent,
    EventosComponent,
    AcercaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})

export class AppModule { }
