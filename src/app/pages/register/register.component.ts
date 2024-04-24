import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required],
      tc: [false, Validators.requiredTrue]
    }, {
      validator: this.passwordMatchValidator // Custom validator to match passwords
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const password2 = formGroup.get('password2')?.value;
    return password === password2 ? null : { mismatch: true };
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    // Stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    // Form is valid, proceed with registration logic (e.g., API call)
    console.log(this.registrationForm.value);
    // this.authService.register(this.registrationForm.value).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.router.navigateByUrl('/login');
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // Reset form
    this.registrationForm.reset();
  }

}
