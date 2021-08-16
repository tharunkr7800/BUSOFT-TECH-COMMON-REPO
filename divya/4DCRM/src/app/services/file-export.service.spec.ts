/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileExportService } from './file-export.service';

describe('Service: FileExport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileExportService]
    });
  });

  it('should ...', inject([FileExportService], (service: FileExportService) => {
    expect(service).toBeTruthy();
  }));
});
