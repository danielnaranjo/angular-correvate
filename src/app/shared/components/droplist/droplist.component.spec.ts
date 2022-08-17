import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DroplistComponent } from './droplist.component';
import { cacheTestingModule } from 'ng-cache-testing-module';

describe('DroplistComponent', () => {
  cacheTestingModule();
  let component: DroplistComponent;
  let fixture: ComponentFixture<DroplistComponent>;

  beforeEach(() => {
    // @ts-ignore
    const formBuilderStub = () => ({ group: object => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DroplistComponent],
      providers: [{ provide: FormBuilder, useFactory: formBuilderStub }]
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
