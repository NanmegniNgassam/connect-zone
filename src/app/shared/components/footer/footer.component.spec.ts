import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent Initialization & Rendering', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the app name', async () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.title')!.textContent).toBe('Connect-Zone');
  });

  it('should render the current month', async () => {
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.copyrights')!.textContent).toContain(currentMonth);
  });

  it('should render the current year', async () => {
    const currentYear = new Date().toLocaleString('en-US', { year: 'numeric' });
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.copyrights')!.textContent).toContain(currentYear);
  });
});
