import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'demoApp';
  users : UserInfo[] = [];
  email: string = '';
  password: string = '';
  remail: string = '';
  rpassword: string = '';
  rcpassword: string = '';
  emailRegex: RegExp =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    if(this.users.length===0){
      this.users.push(new UserInfo('admin','admin'));
      localStorage.setItem('users',JSON.stringify(this.users));
    }
  }
  register(email: string, password: string, cpassword: string) {
    if (!this.emailRegex.test(email)) {
      this.snackBar.open('Email is not valid', '', { duration: 1000 });
    } else if (password !== cpassword) {
      this.snackBar.open('Entered passwords are not the same! Try again!', '', {
        duration: 1000,
      });
    }
    this.users.push(new UserInfo(email,password));
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  login(email: string, password: string) {
    let filteredUsers = this.users.filter(user => user.email === email && user.password === password);
    if(filteredUsers?.length > 0) {
      localStorage.setItem('activeUser',JSON.stringify(filteredUsers[0]));
      this.snackBar.open('Login Successful', '', { duration: 1000 });
      this.router.navigate(['main']);
    } else {
      this.snackBar.open('Login error', '', { duration: 1000 });
    }
  }
}

export class UserInfo{
  constructor(public email?: string, public password?: string){
    this.email = email;
    this.password = password;
  }
}
