import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Component} from "../models/component";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private readonly API = 'http://52.90.207.35:8080';

  constructor(private http: HttpClient) {
  }

  public getComponents(): Observable<Component[]> {
    return this.http.get<Component[]>(`${this.API}/front-end`);
  }

}
