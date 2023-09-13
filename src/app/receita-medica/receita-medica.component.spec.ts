import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaMedicaComponent } from './receita-medica.component';

describe('ReceitaMedicaComponent', () => {
  let component: ReceitaMedicaComponent;
  let fixture: ComponentFixture<ReceitaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceitaMedicaComponent]
    });
    fixture = TestBed.createComponent(ReceitaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
