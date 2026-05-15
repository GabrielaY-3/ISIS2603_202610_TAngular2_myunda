import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WeatherRecord } from '../models/weather-record.model';

@Injectable({ providedIn: 'root' })
export class WeatherRecordService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getRecords(cityId: number): Observable<WeatherRecord[]> {
    return this.http.get<WeatherRecord[]>(`${this.apiUrl}/cities/${cityId}/weather-records`);
  }

  saveRecord(
    cityId: number,
    record: { tempC: number; condition: string; humidity: number }
  ): Observable<WeatherRecord> {
    return this.http.post<WeatherRecord>(
      `${this.apiUrl}/cities/${cityId}/weather-records`,
      record
    );
  }
}