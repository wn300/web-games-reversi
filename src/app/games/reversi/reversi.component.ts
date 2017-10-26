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
  playerWhite: string = ""; playerBlack: string = "";
  public viewGame: string;public viewError:string = "false";public viewRequired:string = "false"
  public statusReversi: Array<reversiObject> = [];

  constructor(private _reversiService: reversiService, private route: ActivatedRoute, private router: Router) {
  }

  getStatusGameReversi(){
    this._reversiService.getGameStatus().subscribe((data) => {
      this.statusReversi = data
      if(data.gameState == "FINALIZED"){
        document.getElementById("btn-action-modal").click();
      }
      console.log(data);
    },(...args) => {
      if(args[0].status == 401){
        console.log("Invalid token");
      }
    });
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
    this.viewError = "false";
    this._reversiService.postMovementsGame(_x,_y).subscribe((...args) =>{
      this.viewError = "false";
      this.getStatusGameReversi();
    }, (...args) => {   
      this.viewError = "Movimiento invalido";  
      if(args[0].status == 400){
        this.viewError = "Movimiento invalido";
        console.log("The movement is invalid");
      }
      if(args[0].status == 401){
        this.viewError = "Invalid token";
        console.log("Invalid token");
      }
      if(args[0].status == 409){
        this.viewError = "El juego ya finalizo o la posición no esta vacia";
        console.log("Game is finished or position is not empty");
      }
    })
  }

  restartGame(){
    this._reversiService.restartGame().subscribe((...args) =>{
      this.getStatusGameReversi();
      }, (...args) => {
        if(args[0].status == 401){
          console.log("Invalid token");
        }
      })   
  }

  startGame(){
    if(this.playerWhite.trim() == "" || this.playerBlack.trim() == ""){      
      this.viewRequired = "Los nombres de los jugadores son obligatorios";
      this.viewGame = "false";
    }else{
      localStorage.setItem("playerWhite", this.playerWhite);
      localStorage.setItem("playerBlack", this.playerBlack);
      this.getStatusGameReversi();
      this.viewGame = "true";
      this.viewRequired = "false";
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

  gamers(){
    if(this.playerWhite.trim() != "" && this.playerBlack.trim() != ""){   
      this.viewRequired = "false";
    } 
  }
}
