import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
    providedIn: 'root'

})

export class WeatherService {
    private apiKey = '';

    async getCurrentWeather(cityName: string): Promise<any> {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`
        try { 
            const response = await axios.get(url);
            return response.data;

        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error
        }
    }
}