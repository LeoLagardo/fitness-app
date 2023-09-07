import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private allService: AllService,
    private fb: FormBuilder
    ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const body = this.loginForm.value;
    this.allService.login(body).subscribe(res => {
      this.allService.userData = res?.data;
      this.router.navigate(['dashboard'])
    })
  }

}
