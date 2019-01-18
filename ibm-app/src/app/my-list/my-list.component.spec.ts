import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {PageLinkService} from '../core/services/page-link.service';

import { MyListComponent } from './my-list.component';
import {PageLinkServiceMock} from '../core/mocks/page-link.service.mock'


describe('MyListComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListComponent ],
      providers: [
          { provide: PageLinkService, useClass: PageLinkServiceMock }
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MyListComponent);
      component = fixture.componentInstance; // MyListComponent test instance
    });
  }));

  it('should have one page-link', async(() => {
      expect(MyListComponent.prototype.pageLinkList.length).toEqual(1);
  }));

  it('HTML should render one page-link', async(() => {
    fixture.detectChanges();
    const el= fixture.nativeElement.querySelector('p');
    expect(el.innerText).toContain('Titulo 1');
  }));
});
