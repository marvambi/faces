import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from "firebase/app";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';
  user: Observable<firebase.User>;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
    this.user.subscribe(auth => {
      if(auth) {
        this.name = auth;
        console.log(this.name);
      }
    });

  }

  logout() {
     this.af.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
