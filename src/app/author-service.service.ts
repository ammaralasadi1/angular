import { Injectable } from '@angular/core';

@Injectable()
export class AuthorServiceService {
      getAuthors(){
      return ['Ammar', 'Fahim', 'Alasadi', 'Zain', 'Fonci'];
    }
}
