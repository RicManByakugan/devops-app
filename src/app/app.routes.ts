import { Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { LogsComponent } from './logs/logs.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'deployment', component: DeploymentComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'monitoring', component: MonitoringComponent },
    { path: 'login', component: LoginComponent },
];
