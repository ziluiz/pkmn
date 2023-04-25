import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkdxComponent } from './pkdx.component';

describe('PkdxComponent', () => {
  let component: PkdxComponent;
  let fixture: ComponentFixture<PkdxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkdxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkdxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
