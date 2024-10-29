import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringComponent } from './monitoring.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MonitoringComponent', () => {
  let component: MonitoringComponent;
  let fixture: ComponentFixture<MonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            data: of({})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
