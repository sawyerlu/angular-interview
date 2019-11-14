import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ModelService {
  constructor(private http: HttpClient) {}

  getModels() {
    return this.http.get("https://localhost:44387/vehicle-checks/makes/Lotus");
  }
}
