export class reversiObject{
    gameState: string 
    currentPlayer: string
    whiteCount: number
    blackCount: number
    boardRows: Object[]

    constructor(gameState: string, currentPlayer: string, whiteCount: number, blackCount: number, boardRows: Object[]) {
        this.gameState = gameState;
        this.currentPlayer = currentPlayer;
        this.whiteCount = whiteCount;
        this.blackCount = blackCount;
        this.boardRows = boardRows;
      }
}
