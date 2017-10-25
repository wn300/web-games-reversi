import { Component, OnInit, Injectable, Directive, DoCheck, Input } from '@angular/core';
import { reversiService } from '../../services/reversi.service';
import { reversiObject } from '../../models/reversi.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reversi',
  templateUrl: './reversi.component.html',
  styleUrls: ['./reversi.component.css'],
  providers:[reversiService]

})
export class ReversiComponent implements OnInit {
  playerWhite: string; playerBlack: string;
  public viewGame: string;
  public statusReversi: Array<reversiObject> = [];

  constructor(private _reversiService: reversiService, private route: ActivatedRoute, private router: Router) {
  }

  getStatusGameReversi(){
    this._reversiService.getGameStatus().subscribe((data) => {this.statusReversi = data, console.log(data)});
   }

  ngOnInit() {    
    if((localStorage.getItem("playerWhite") == null || localStorage.getItem("playerWhite") == "undefined") || (localStorage.getItem("playerBlack") == null || localStorage.getItem("playerBlack") == "undefined")){
      this.viewGame = "false";
    }else{
      this.playerWhite = localStorage.getItem("playerWhite");
      this.playerBlack = localStorage.getItem("playerBlack");
      this.getStatusGameReversi();
      this.viewGame = "true";
    }
  }

  postMovement(_x:string, _y:string){
    this._reversiService.postMovementsGame(_x,_y).subscribe((...args) =>{
      this.getStatusGameReversi();
    }, (...args) => {
      debugger
      console.log(args);
    })
  }

  restartGame(){
    this._reversiService.restartGame().subscribe((...args) =>{
      this.getStatusGameReversi();
      }, (...args) => {
        debugger
        console.log(args);
      })   
  }

  startGame(){
    if(this.playerWhite.trim() == "" || this.playerWhite == undefined || this.playerBlack == undefined || this.playerBlack.trim() == ""){
      this.viewGame = "false";
    }else{
      localStorage.setItem("playerWhite", this.playerWhite);
      localStorage.setItem("playerBlack", this.playerBlack);
      this.getStatusGameReversi();
      this.viewGame = "true";
    } 
  }

  returnGame(){
    this.viewGame = "false";    
  }

  exitGame(){
    localStorage.removeItem("playerWhite");
    localStorage.removeItem("playerBlack");
    this.restartGame();
    this.router.navigate(['/WebGames']);
    this.viewGame = "false";
  }
}
