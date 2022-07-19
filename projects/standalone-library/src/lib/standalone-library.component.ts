import { Component } from '@angular/core';

@Component({
  selector: 'lib-standalone-library',
  template: ` <p>standalone-library works!</p> `,
  standalone: true,
})
export class StandaloneLibraryComponent {}
