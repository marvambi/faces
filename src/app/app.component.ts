import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open Faces';
  user: Observable<firebase.User>;
  fbfaces: FirebaseListObservable<any[]>;
  faceVal: any = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.fbfaces = af.list('/faces', {
      query: {
        limitToLast: 10
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  Send(desc: string) {
      this.fbfaces.push({ message: desc});
      this.faceVal = '';
  }
}
