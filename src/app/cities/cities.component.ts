import { Component, OnInit } from '@angular/core';
import { cities } from '../../assets/data/cities';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cityData: { id: number; cityName: string; imgAddress: string; posts: any[]; weather: any }[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  async fetchWeatherData(): Promise<void> {
    for (const city of cities) {
      const weatherData = await this.weatherService.getCurrentWeather(city.city);
      const cityData = {
        id: city.id,
        cityName: city.city,
        imgAddress: city.imgAddres, // Corrected property name
        posts: [], // Replace with your posts data or remove this line if not needed
        weather: weatherData
      };
      this.cityData.push(cityData);
    }
  }
}
