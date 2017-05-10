import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubUsers} from '../../providers/github-users';
import {User} from '../../models/user';

/**
 * Generated class for the UserDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetails {

  login:string;
  user:User;

  constructor(public navCtrl: NavController, public navParams: NavParams,private githubUsers : GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadDetails(this.login).subscribe(user =>{
      this.user = user;
      console.log(user);
    });
  }

}
