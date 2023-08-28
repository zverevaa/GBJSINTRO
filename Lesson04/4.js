"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 1; i <= 20; i++) {
  console.log(`x`.repeat(i));
}

//В процессе выполнения задания мне пришла еще идея для елки)

function drawChristmasTree(size) {
  for (let i = 1; i <= size; i += 2) {
    let negativeSpace = "=".repeat((size - i) / 2);
    if (i === 1) {
      console.log(negativeSpace + "✶" + negativeSpace);
    }
    console.log(negativeSpace + "x".repeat(i) + negativeSpace);
  }
}

drawChristmasTree(20);
