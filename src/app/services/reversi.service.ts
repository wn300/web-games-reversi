import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class reversiService {


  

  constructor(private http: Http) { }

  getGameStatus() {
    return this.http.get("http://35.163.129.163:9000/reversi/game?token=10295817-da64-41d6-9e00-6cc2b71d67e1")
    .map(res => res.json());
  }

  postMovementsGame(_x: string, _y: string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post("http://35.163.129.163:9000/reversi/game/movements?token=10295817-da64-41d6-9e00-6cc2b71d67e1&x=" + _x + "&y=" + _y, headers)
    .map(res => res.json());
  }

  restartGame() {
    return this.http.delete("http://35.163.129.163:9000/reversi/game?token=10295817-da64-41d6-9e00-6cc2b71d67e1")
      .map(res => res.json());
  }
  
} 