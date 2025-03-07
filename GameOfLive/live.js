const LIVE=1;
const DEAD=0;
//const定義常數使用另外也有 var和let的用法


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
    //prototype指的是模型 它可以是函數原型、物件原型  取決於上下文
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
    //這段程式碼是 Life 對象的方法，
    //計算指定位置 周圍的活鄰居數量。根據生命遊戲的標準規則
    //檢查指定位置周圍八個方向的細胞狀態，並將活著的細胞（LIVE）計數加總。
}
Life.prototype.update = function(){
    //copy of grid for next generation
    //var nextGrid=this.grid; //same memory
    var nextGrid = JSON.parse(JSON.stringify(this.grid));
    //用來儲存下一段記憶體避免重複使用
    // var kid= {age:5, hight:170}
    // var kid1 = kid
    var count=0;//這個變數用來儲存每個細胞周圍的活鄰居數量
    for (let row = 0; row < this.row; row++) {
        for (let col = 0; col < this.col; col++) {
          count = this.calcNeighbor(row, col);
          //update LIVE=>DEAD
          if(this.statusAt(row,col) == LIVE && (count<2 || count>3)){
            nextGrid[row][col] = DEAD;
          }//如果當前細胞是活的且周圍的活鄰居數少於 2 或多於 3，則該細胞在下一代將變為死亡。
          //update DEAD=> LIVE 
          if(this.statusAt(row,col) == DEAD && count==3){
            nextGrid[row][col] = LIVE;
          }
        }
    }

    //update this.grid
    this.grid = nextGrid;
    //gc() //garbage collection
}  //釋放不再被使用的記憶體資源



var game1 = new Life(4,3);
game1.grid[1][0]=LIVE;
game1.grid[1][1]=LIVE;
game1.grid[1][2]=LIVE;
console.log("(1,1):"+game1.calcNeighbor(1,1));
console.log("(2,0):"+game1.calcNeighbor(2,0));
game1.update();// 根據生命遊戲的規則更新遊戲狀態
console.log(game1.grid)
//初始化一個 4x3 的網格。
//接著，將第二行的三個細胞設置為活著的狀態（LIVE）。
//然後，分別使用 calcNeighbor 方法計算了指定位置 (1,1) 和 (2,0) 

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
//將指定位置的細胞設置為活著的狀態
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

function boardClick(event){
  var row = Math.floor(event.offsetY/drawgame1.size);
  var col = Math.floor(event.offsetX/drawgame1.size);
  if(drawgame1.game.grid[row][col]==LIVE)
      drawgame1.game.grid[row][col]=DEAD;
  else
      drawgame1.game.grid[row][col]=LIVE;
  drawgame1.draw();
}