

import fs from "fs";
import path from "path";

let arrdata: string[] = [];

fs.readdir(path.join(__dirname, "images"), "utf-8", (err, data) => {
  if (err) throw err;
  // console.log("Data", data);

  data.forEach((e) => {
    if (e === "ava1.jpg") {
      // console.log("found");
    } else {
      // console.log(e);
    }
  });
  //   console.log("array data inside scope", arrdata);
});

// console.log("array", arrdata);



let arr_of_basket: string[] = [
  "orange",
  "apple",
  "olive",
  "pine-apple",
  "banana",
  "lemon",
  "peach",
  "pear",
  "watermelon",
  "coconut",
];

// console.log(Math.floor(Math.random() * arr_of_basket.length));
// console.log(arr_of_basket.length);

for (let i = 1; i <= 3; i++) {
  let random: string =
    arr_of_basket[Math.floor(Math.random() * arr_of_basket.length)];
  // console.log(i);
  // console.log(random);
}

// assignment
import chat from "prompt-sync";

console.time("start");
let computer_input: string[] = [];

for (let i = 1; i <= 3; i++) {
  let random: string =
    arr_of_basket[Math.floor(Math.random() * arr_of_basket.length)];
  let push = computer_input.push(random);
}
console.log(computer_input);

let prompt = chat();

const predit_fruit = (predit: string) => {
  predit = prompt("HI!, what's your name ");

  console.log("");

  console.log("welcome".toUpperCase(), predit.toUpperCase());

  console.log(
    "There Are 10 fruit in a basket if you predit at least 3 you will get a TOKEN!"
  );
  console.log("");

  console.log("Here are the list of fruit below...");

  console.log(arr_of_basket);

  console.log("");

  let reply1 = prompt(
    `Okay ${predit} Do you want to predit, "Click Y for YES! OR ANY Alphbet OR Number to QUIT!" `
  ).toUpperCase();

  let catch_input: string[] = [];

  if (reply1 === "Y") {
    console.log("");

    console.log("let get started");

    console.log("");
    console.log(
      `You have to input 3 fruit, NOTE: There Are 10 fruit in a basket if you predit at least 3 you will get a TOKEN!... `
    );
    
    for (let i = 1; i <= 3; i++) {
      let start = prompt(`Input ${i} `);

      catch_input.push(start);
      console.log("input", i, catch_input);
    }
    console.log("your guess".toUpperCase(), catch_input.concat());

    console.log("Random Input".toUpperCase(), computer_input);

    function arrayEquals(a: any[], b: any[]) {
      if (a.every((check, index) => check === b[index])) {
        console.log("you are correct".toUpperCase());
        console.log("here is your token 👉 😘".toUpperCase());
      } else {
        console.log("you are wrong!".toUpperCase());
      }
    }

    arrayEquals(computer_input, catch_input);
  }
};

predit_fruit("hi");

console.timeLog("start");
