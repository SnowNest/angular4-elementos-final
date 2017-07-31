import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscartodosComponent } from './buscartodos.component';

describe('BuscartodosComponent', () => {
  let component: BuscartodosComponent;
  let fixture: ComponentFixture<BuscartodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscartodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscartodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
