
var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

class Point {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
    }
}

var Step = new Point(1, 1);
var Exit = new Point(8, 10);
var Stack = [];

function drawBoard() {
    var canvas = document.getElementById("board").getContext("2d");
    for (let row = 0; row < MAZE.length; row++) {
        for (let col = 0; col < MAZE[0].length; col++) {
            if (MAZE[row][col] == 0) {
                canvas.fillStyle = "#ffffff";
            }
            else if (MAZE[row][col] == 1) {
                canvas.fillStyle = "#000";
            } else if (MAZE[row][col] == 2) {
                canvas.fillStyle = "#f00";
            }
            canvas.fillRect(col * 50, row * 50, 50, 50);
        }
    }
}
function drawPoint(row, col){
    var canvas = document.getElementById("board").getContext("2d");
    if (MAZE[row][col] == 0) {
        canvas.fillStyle = "#ffffff";
    }
    else if (MAZE[row][col] == 1) {
        canvas.fillStyle = "#000";
    } else if (MAZE[row][col] == 2) {
        canvas.fillStyle = "#f00";
    }
    canvas.fillRect(col * 50, row * 50, 50, 50);
}

var dir=[[-1,0],[0,-1],[1,0],[0,1]]
dir.sort((a,b)=>{
    return Math.random()-0.5;
})
function go() {
    drawBoard();
    //Method 2
    while (Step.row != Exit.row || Step.col != Exit.col) {
        MAZE[Step.row][Step.col] = 2;
        drawPoint(Step.row, Step.col);
        //up
        if (MAZE[Step.row + dir[0][0]][Step.col+dir[0][1]] == 0) {
            Stack.push(new Point(Step.row, Step.col));
            Step.row = Step.row + dir[0][0];
            Step.col = Step.col + dir[0][1];
        } else
            //left
            if (MAZE[Step.row+ dir[1][0]][Step.col +dir[1][1]] == 0) {
                Stack.push(new Point(Step.row, Step.col));
                Step.row = Step.row + dir[1][0];
                Step.col = Step.col + dir[1][1];
            } else
                //down
                if (MAZE[Step.row + dir[2][0]][Step.col+dir[2][1]] == 0) {
                    Stack.push(new Point(Step.row, Step.col));
                    Step.row = Step.row + dir[2][0];
                    Step.col = Step.col + dir[2][1];
                } else
                    //right
                    if (MAZE[Step.row+ dir[3][0]][Step.col +dir[3][1]] == 0) {
                        Stack.push(new Point(Step.row, Step.col));
                        Step.row = Step.row + dir[3][0];
                        Step.col = Step.col + dir[3][1];
                    } else {//trace back
                        if (Stack.length > 0) {
                            // var Prev = Stack.pop();
                            // Step.row = Prev.row;
                            // Step.col = Prev.col;
                            Step = Stack.pop();
                        } else {
                            break;
                        }
                    }
    }
    //To exit
    if (Stack.length > 0) {
        MAZE[Step.row][Step.col] = 2;
        drawPoint(Step.row, Step.col);
        console.log("Done!");
    } else {
        console.log("No Solution!");
    }
}