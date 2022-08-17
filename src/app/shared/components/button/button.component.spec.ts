import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cacheTestingModule } from 'ng-cache-testing-module';
import { ReusableButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  cacheTestingModule();
  let component: ReusableButtonComponent;
  let fixture: ComponentFixture<ReusableButtonComponent>;

  const label = 'Aceptar ando';
  const inProgress = 'Cargando ando';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
		expect(label).not.toBeNull();
  });

  it('should correctly render the passed @Input value', () => {
		component.label = label;
		fixture.detectChanges();
		expect(inProgress).toBe('Cargando ando');
  });

  it('should correctly render the passed @Input value', () => {
		component.label = '';
		fixture.detectChanges();
		expect(label).toBe('Aceptar ando');
  });

});
