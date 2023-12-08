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
    //這段程式碼是 Life 對象的方法，
    //計算指定位置 周圍的活鄰居數量。根據生命遊戲的標準規則
    //檢查指定位置周圍八個方向的細胞狀態，並將活著的細胞（LIVE）計數加總。
}
Life.prototype.update = function(){
    //copy of grid for next generation
    //var nextGrid=this.grid; //same memory
    var nextGrid = JSON.parse(JSON.stringify(this.grid));//用來儲存下一段記憶體避免重複使用
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



var game1 = new Life(3,3);
game1.grid[1][0]=LIVE;S
game1.grid[1][1]=LIVE;
game1.grid[1][2]=LIVE;
console.log("(1,1):"+game1.calcNeighbor(1,1));
console.log("(2,0):"+game1.calcNeighbor(2,0));
game1.update();
console.log(game1.grid)
//初始化了一個 3x3 的網格。
//接著，將第二行的三個細胞設置為活著的狀態（LIVE）。
//然後，分別使用 calcNeighbor 方法計算了指定位置 (1,1) 和 (2,0) 
//周圍的活鄰居數量，最後呼叫了 update 方法更新下一代。

//var game2 = new Life(30,30);