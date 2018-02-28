import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
      alert('This post has already been deleted');
  }
  
}
