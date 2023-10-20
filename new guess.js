var readline = require("readline-sync");

// 生成一个随机的4位数字
var answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
answer.sort(function(a, b) { return Math.random() - 0.5; });
answer = answer.slice(0, 4); // 获取前4个元素

// 初始化A和B的计数器
var counterA = 0;
var counterB = 0;

// 主游戏循环
for (var i = 0; i < 7; i++) {
    do {
        var guess = readline.question("請猜測4位數：");

        if (!isNaN(guess) && guess.length == 4) {
            break;
        } else {
            console.log("輸入4位數字。");
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