const LIVE=1;
const DEAD=0;


class Life{
    constructor(_row, _col){
        this.grid = [];
        this.row = _row;
        this.col = _col;
        for (let r = 0; r < this.row; r++) {
            this.grid.push(new Array()); 
            for (let c = 0; c < this.col; c++) {
                this.grid[r][c] = DEAD;
                //this.grid[r].push(DEAD);
            }
        }
    }

    // calcNeighbor = function(row,col){

    // }
}
Life.prototype.statusAt = function(row, col){
    if(row<0 || col<0 || row>=this.row || col>=this.col)
      return DEAD;
    else
      return this.grid[row][col];
}
Life.prototype.calcNeighbor = function(row, col){
    var count=0;
    count += this.statusAt(row-1, col-1)//lfet top
    count += this.statusAt(row-1, col+0)//up
    count += this.statusAt(row-1, col+1)//right top
    count += this.statusAt(row+0, col-1)//left
    count += this.statusAt(row+0, col+1)//right
    count += this.statusAt(row+1, col-1)//lfet bottom
    count += this.statusAt(row+1, col+0)//down
    count += this.statusAt(row+1, col+1)//right bottom
    return count;
}



var game1 = new Life(3,3);
game1.grid[1][0]=LIVE;
game1.grid[1][1]=LIVE;
game1.grid[1][2]=LIVE;
console.log("(1,1):"+game1.calcNeighbor(1,1));
console.log("(2,0):"+game1.calcNeighbor(2,0));
//var game2 = new Life(30,30);

class DrawGame{
    constructor(_game, _canvas){
        this.game = _game;
        this.canvas = document.getElementById(_canvas).getContext("2d");
        var size1 = document.getElementById(_canvas).width/this.game.col;
        var size2 = document.getElementById(_canvas).height/this.game.row;
        this.size = Math.min(size1,size2);
        this.canvas.lineWidth = 1;
        this.canvas.lineStyle = "#000";
    }
}

DrawGame.prototype.draw= function(){
    for (let row = 0; row < this.game.row; row++) {
        for (let col = 0; col < this.game.col; col++) {
           if(this.game.grid[row][col]==LIVE){
               this.canvas.fillStyle = "#f00";
           }else{
                this.canvas.fillStyle = "#fff";
           }   
            this.canvas.fillRect(col*this.size, row*this.size, this.size, this.size);
            this.canvas.strokeRect(col*this.size, row*this.size, this.size, this.size);
        }
    }
}

var game1 = new Life(5,5);
game1.grid[1][0]=LIVE;
game1.grid[1][1]=LIVE;
game1.grid[1][2]=LIVE;
console.log("(1,1):"+game1.calcNeighbor(1,1));
console.log("(2,0):"+game1.calcNeighbor(2,0));

var drawgame1 = new DrawGame(game1, "board");
drawgame1.draw();

function next(){
    game1.update();
    //draw
    drawgame1.draw();
}

// console.log(game1.grid)

//var game2 = new Life(30,30);