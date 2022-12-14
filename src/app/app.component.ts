import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  columns = [
    { property: 'birthPlace', width: '100px' },
    { property: 'birthdate', width: '100px' },
    { property: 'city', width: '100px' },
    { property: 'cityName', width: '100px' },
    { property: 'country', width: '100px' },
    { property: 'dependents', width: '100px' },
    { property: 'email', width: '100px' },
    { property: 'father', width: '100px' },
    { property: 'genre', width: '100px' },
    { property: 'genreDescription', width: '100px' },
    { property: 'graduation', width: '100px' },
    { property: 'id', width: '100px' },
    { property: 'mother', width: '100px' },
    { property: 'name', width: '100px' },
    { property: 'nationality', width: '100px' },
    { property: 'nickname', width: '100px' },
    { property: 'state', width: '100px' },
    { property: 'status', width: '100px' },
    { property: 'statusDescription', width: '100px' },
    { property: 'street', width: '100px' },
    { property: 'uf', width: '100px' },
  ];

  columns2 = [
    { property: 'birthPlace', width: '10%' },
    { property: 'birthdate', width: '10%' },
    { property: 'city', width: '10%' },
    { property: 'cityName', width: '10%' },
    { property: 'country', width: '10%' },
    { property: 'dependents', width: '10%' },
    { property: 'email', width: '10%' },
    { property: 'father', width: '10%' },
    { property: 'genre', width: '10%' },
    { property: 'genreDescription', width: '10%' },
    { property: 'graduation', width: '10%' },
    { property: 'id', width: '10%' },
    { property: 'mother', width: '10%' },
    { property: 'name', width: '10%' },
    { property: 'nationality', width: '10%' },
    { property: 'nickname', width: '10%' },
    { property: 'state', width: '10%' },
    { property: 'status', width: '10%' },
    { property: 'statusDescription', width: '10%' },
    { property: 'street', width: '10%' },
    { property: 'uf', width: '10%' },
  ];
}
