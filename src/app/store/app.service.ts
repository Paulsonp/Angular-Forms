import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {
  public spinner: EventEmitter<any> = new EventEmitter();
  public title: EventEmitter<any> = new EventEmitter();
}
