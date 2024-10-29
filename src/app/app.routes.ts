import { Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { LogsComponent } from './logs/logs.component';

export const routes: Routes = [
    { path: '', redirectTo: 'deployment', pathMatch: "full" },
    { path: 'deployment', component: DeploymentComponent },
    { path: 'logs', component: LogsComponent },
    { path: 'monitoring', component: MonitoringComponent },
];
