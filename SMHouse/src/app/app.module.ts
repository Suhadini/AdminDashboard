import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule,Routes} from '@angular/router';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { AdminComponent } from './admin/admin.component';
// import { EventCreationComponent } from './event-creation/event-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    EventCreationComponent,
    AdminComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
