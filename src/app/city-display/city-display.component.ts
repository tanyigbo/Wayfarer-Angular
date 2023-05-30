import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from 'src/assets/data/cities';
import { WeatherService } from '../cities/weather.service';
import { ActiveUrlService } from '../active-url.service';

@Component({
  selector: 'app-city-display',
  templateUrl: './city-display.component.html',
  styleUrls: ['./city-display.component.css']
})
export class CityDisplayComponent implements OnInit, OnDestroy {

  cityData: any;
  cityId: any;


  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private urlService: ActiveUrlService
  ) {
    this.cityData = cities.map(city => ({
      ...city,
      weather: null
    }));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
      this.urlService.sendActiveUrl(this.cityId);
      this.fetchWeatherData(parseInt(this.cityId, 10));
    });
  }

  ngOnDestroy(): void {
    this.urlService.sendActiveUrl('');
  }

  async fetchWeatherData(cityId: any): Promise<void> {
    const city = cities.find(city => city.id === parseInt(cityId, 10));
    if (city) {
      try {
        const weatherData = await this.weatherService.getCurrentWeather(city.city);
        this.cityData[cityId].weather = weatherData;
      } catch (error) {
        console.error(`Error fetching weather data for ${city.city}:`, error);
      }
    }
  }
}
