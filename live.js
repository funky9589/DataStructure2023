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
}

var game1 = new Life(3,3);
var game2 = new Life(30,30);