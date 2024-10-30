import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form!: FormGroup;
  languages: string[] = [];
  appName!: any;
  packageName!: any;
  versionCode!: any;
  versionNumber!: any;

  constructor(private fb: FormBuilder, private router: Router, private appVersion: AppVersion
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      sheridanId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      campus: ['', Validators.required],
      department: ['', Validators.required],
      languages: [[], Validators.required]
    });

    this.loadAppVersion();
  }

  loadAppVersion() {
    this.appVersion.getAppName().then(name => this.appName = name);
    this.appVersion.getPackageName().then(pkg => this.packageName = pkg);
    this.appVersion.getVersionCode().then(code => this.versionCode = code);
    this.appVersion.getVersionNumber().then(num => this.versionNumber = num);
  }

  onLanguageChange(event: any, language: string) {
    if (event.detail.checked) {
      this.languages.push(language);
    } else {
      const index = this.languages.indexOf(language);
      if (index > -1) {
        this.languages.splice(index, 1);
      }
    }
    this.form.get('languages')?.setValue(this.languages);
  }

  onSubmit() {
    const studentData = this.form.value;
    if (this.form.valid) {
      this.router.navigate(['/submitted-form'], { state: { studentData } });
    }
  }
}


