import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {
  apiKey = '0738953d225623e9'
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apiKey + '/conditions/q';
  }

  getWeather(city, country){
    return this.http.get(this.url + '/' + country + '/' + city + '.json');
  }

}
