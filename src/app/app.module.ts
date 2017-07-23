import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchFacesComponent } from './search-faces/search-faces.component';
import { SearchFacesService } from './search-faces.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFacesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [SearchFacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
