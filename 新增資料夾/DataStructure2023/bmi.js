var readline = require("readline-sync");

do {
    var height = readline.question("Please enter ur height (cm)?");
   
    if(!isNaN(height) && height<=230 && height>30)
        break;
    else{
        console.log("Height must between 30 and 230cm!")
        continue;
    }    
}while(true);

while(true){
    var weight = readline.question("Please enter ur weight (kg)?");
    if(!isNaN(weight) && weight<=500 && weight>10)
        break;
    else{
        continue;
    }   
}
console.log(height);
console.log(weight);
//bmi = w/(h^2) w = (18.5~24)*(h^2)
var bmi = weight/(Math.pow(height/100, 2));
//var bmi = weight/((height/100)*(height/100));
console.log(bmi);
if(bmi<18.5){
  console.log("喔喔！你需要再吃營養些，讓自己重一些！")
}else if(bmi<24){
  console.log("很不錯喔，很標準，請您繼續保持！")
}else{
  console.log("肥胖容易引起疾病，您得要多多注意自己的健康囉！")
  //claasify 24-27, 27-30, 30-35, >35
  if(bmi<27){
    console.log("過重：24<=BMI<27");
  }else if(bmi<30){
    console.log("輕度肥胖：27 <= BMI < 30");
  }else if(bmi<35){
    console.log("中度肥胖：30 <= BMI < 35");
  }else{
    console.log("重度肥胖：BMI >= 35");
  }
}