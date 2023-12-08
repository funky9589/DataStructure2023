var readline = require("readline-sync");

// 隨機生成4個數字
var answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
answer.sort(function(a, b) { return Math.random() - 0.5; });
answer = answer.slice(0, 4); // 抓取前面4個數字

// 將AB歸零
var counterA = 0;
var counterB = 0;

// 主要遊戲
for (var i = 0; i < 20; i++) //20次機會
{
    do {
        var guess = readline.question("Please guess 4 digits");

        if (!isNaN(guess) && guess.length == 4) {
            break;
        } else {
            console.log("4 digits please!。");
            continue;
        }
    } while (true);

    // 初始化此次猜测的计数器
    var tempCounterA = 0;
    var tempCounterB = 0;

    // 检查猜测中的A和B
    for (var j = 0; j < 4; j++) {
        if (parseInt(guess[j]) === answer[j]) {
            tempCounterA++;
        } else if (answer.includes(parseInt(guess[j])) && answer[j] !== parseInt(guess[j])) {
            tempCounterB++;
        }
    }

    console.log(tempCounterA + "A" + tempCounterB + "B");

    // 更新总计数器
    counterA = tempCounterA;
    counterB = tempCounterB;

    if (counterA === 4) {
        console.log("you win！");
        break;
    }
}

if (counterA < 4) {
    console.log("you lose！");
}