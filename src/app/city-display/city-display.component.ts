import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from 'src/assets/data/cities';
import { WeatherService } from '../cities/weather.service';

@Component({
  selector: 'app-city-display',
  templateUrl: './city-display.component.html',
  styleUrls: ['./city-display.component.css']
})
export class CityDisplayComponent implements OnInit {

  cityData: any;
  cityId: any;
  

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
    this.cityData = cities.map(city => ({
      ...city,
      weather: null
    }));
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cityId = params['id'];
      this.fetchWeatherData(parseInt(this.cityId, 10));
      console.log(this.cityData);
    });
  }
  

  async fetchWeatherData(cityId: any): Promise<void> {
    const city = cities.find(city => city.id === parseInt(cityId, 10));
    if (city) {
      try {
        const weatherData = await this.weatherService.getCurrentWeather(city.city);
        console.log(weatherData);
        this.cityData[cityId].weather = weatherData;
        console.log(weatherData);
      } catch (error) {
        console.error(`Error fetching weather data for ${city.city}:`, error);
      }
    }
  }
  getValidImageAddress(imgAddress: string): string {
    if (imgAddress) {
      if (!imgAddress.toLowerCase().endsWith('.png')) {
        // Convert non-PNG image URL to PNG format
        imgAddress = imgAddress.replace(/\.[^/.]+$/, '.png');
      }
      return imgAddress;
    }
    // Provide a fallback PNG image URL if imgAddress is undefined or empty
    return 'src/assets/images/golden-gate-bridge.jpeg';
  }

  
  
  
}
