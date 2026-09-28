import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { RawgService } from './rawg.service';

describe('RawgService', () => {
  let service: RawgService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(),
      provideHttpClientTesting()],
    });
    service = TestBed.inject(RawgService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to RAWG APi with correct parameters', () => {
    service.getGames().subscribe();

    const req = httpMock.expectOne(
      request => request.url === 'https://api.rawg.io/api/games'
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('key')).toBeTruthy();
    expect(req.request.params.get('page_size')).toBe('10');

    req.flush({
      count: 0,
      next: null,
      previous: null,
      results: [],
    });
  });

  it('should return the games received from RAWG API', () => {
    const mockResponse = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          id: 1,
          name: 'The Last of Us Part II',
          background_image: 'https://example.com/game.jpg',
          platforms: [],
        }
      ]
    }

    let response: any;

    service.getGames().subscribe((data) => {
      response = data;
    });

    const req = httpMock.expectOne(
      request => request.url === 'https://api.rawg.io/api/games'
    );

    req.flush(mockResponse);

    expect(response).toEqual(mockResponse);
  });


});
