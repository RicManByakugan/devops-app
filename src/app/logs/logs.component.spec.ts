import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponent } from './logs.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsComponent],
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

    fixture = TestBed.createComponent(LogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
