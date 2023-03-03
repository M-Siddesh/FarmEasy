import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginPage implements OnInit {
    
    public postData = {
        username: '',
        password: ''
    };

    constructor(
        private router: Router,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        
    }

    validateInputs(){
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        return (
            this.postData.username &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0
        );
    }

    loginAction() {
        this.router.navigate(['/home/feed']);
    }

    registerAction() {
        this.router.navigate(['/register'])
    }
}


