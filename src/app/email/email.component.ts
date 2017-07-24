import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from "firebase/app";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent {
    state: string = '';
    error: any;
    user: Observable<firebase.User>;
    constructor(public af: AngularFireAuth, private router: Router) {

      this.user = af.authState;
      this.user.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }


  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then((success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch((err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
