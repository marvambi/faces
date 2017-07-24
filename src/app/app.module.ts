import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchFacesComponent } from './search-faces/search-faces.component';
import { SearchFacesService } from './search-faces.service';

// Imports for login component
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "app/auth-service.service";
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyAX8gTaqMIcWv1Yqjgm6B1q3lYhg4VLKF8",
  authDomain: "presenting-faces.firebaseapp.com",
  databaseURL: "https://presenting-faces.firebaseio.com",
  projectId: "presenting-faces",
  storageBucket: "",
  messagingSenderId: "396502980382"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchFacesComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [SearchFacesService,AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
