import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComputerVisionService {

  private endpoint = `${environment.azureEndpoint}/vision/v3.2/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType`;

  constructor(private http: HttpClient) {}

  analyzeImage(imageUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.azureApiKey
    });

    const body = {
      url: imageUrl
    };

    return this.http.post(this.endpoint, body, { headers });
  }
}