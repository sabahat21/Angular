import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.page.html',
  styleUrls: ['./submitted-form.page.scss'],
})
export class SubmittedFormPage implements OnInit {
  studentData: any;
  appName!: any;
  packageName!: any;
  versionCode!: any;
  versionNumber!: any;
  constructor(private router: Router, private appVersion: AppVersion) { 
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
           this.studentData = navigation.extras.state['studentData'];
      }
    }
    loadAppVersion() {
      this.appVersion.getAppName().then(name => this.appName = name);
      this.appVersion.getPackageName().then(pkg => this.packageName = pkg);
      this.appVersion.getVersionCode().then(code => this.versionCode = code);
      this.appVersion.getVersionNumber().then(num => this.versionNumber = num);
    }
  ngOnInit() {
      this.loadAppVersion();
    }
  }


