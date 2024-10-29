import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentComponent } from './deployment.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DeploymentComponent', () => {
  let component: DeploymentComponent;
  let fixture: ComponentFixture<DeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            data: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
