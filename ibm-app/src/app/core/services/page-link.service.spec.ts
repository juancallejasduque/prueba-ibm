import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

//import { asyncData, asyncError } from '../../testing/async-observable-helpers';

//import { PageLinkService } from './page-link.service';
import { PageLinkServiceMock } from '../mocks/page-link.service.mock';

describe('PageLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageLinkServiceMock = TestBed.get(PageLinkServiceMock);
    expect(service).toBeTruthy();
  });
});
