import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  postData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    public toastController: ToastController,
    private toastService: ToastService,
    private router: Router
  ) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registration successful',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() { }

  validateInputs() {
    console.log(this.postData);
    let username = this.postData.username.trim();
    let password = this.postData.password.trim();
    let email = this.postData.email.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      this.postData.email &&
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    this.router.navigate(['/login']);
  }
  
  registerAction() {

  }
}