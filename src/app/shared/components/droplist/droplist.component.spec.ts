import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { DroplistComponent } from './droplist.component';

describe('DroplistComponent', () => {
  let component: DroplistComponent;
  let fixture: ComponentFixture<DroplistComponent>;

  beforeEach(() => {
    // @ts-ignore
    const formBuilderStub = () => ({ group: object => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DroplistComponent],
      providers: [{ provide: UntypedFormBuilder, useFactory: formBuilderStub }]
    });
    fixture = TestBed.createComponent(DroplistComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`dropListLabel has default value`, () => {
    expect(component.dropListLabel).toEqual(`Selecciona tu empleador`);
  });

  it(`dropListData has default value`, () => {
    expect(component.dropListData).toEqual([]);
  });
});
