import { Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnchorService {
  public viewContainerRef: ViewContainerRef | null = null;
}
