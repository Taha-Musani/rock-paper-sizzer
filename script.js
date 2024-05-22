let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sizzer = document.getElementById("sizzer");
let user_score = document.getElementById("user-score");
let comp_score = document.getElementById("comp-score");
let message = document.querySelector(".message");
let reset = document.querySelector(".btn");
let user_score_value = 0;
let comp_score_value = 0;
let user_choice;
let comp_choice;
function user_decision() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    comp_choice = "rock";
  } else if (number === 1) {
    comp_choice = "paper";
  } else if (number === 2) {
    comp_choice = "sizzer";
  }
}
rock.addEventListener("click", function () {
  user_choice = "rock";
  user_decision();
  checkresult();
});
paper.addEventListener("click", function () {
  user_choice = "paper";
  user_decision();
  checkresult();
});
sizzer.addEventListener("click", function () {
  user_choice = "sizzer";
  user_decision();
  checkresult();
});
function checkresult() {
  if (user_choice === comp_choice) {
    message.innerText = "Draw";
    message.style.backgroundColor = "rgb(66, 54, 174)";
  } else if (user_choice === "rock" && comp_choice === "sizzer") {
    message.innerText = `user wins! computer choise is ${comp_choice}`;
    user_score_value++;
    message.style.backgroundColor = "green";
  } else if (user_choice === "sizzer" && comp_choice === "rock") {
    message.innerText = `computer wins! comp choise is ${comp_choice}`;
    comp_score_value++;
    message.style.backgroundColor = "red";
  } else if (user_choice === "sizzer" && comp_choice === "paper") {
    message.innerText = `user wins! computer choise is ${comp_choice}`;
    user_score_value++;
    message.style.backgroundColor = "green";
  } else if (user_choice === "paper" && comp_choice === "sizzer") {
    message.innerText = `computer wins! computer choise is ${comp_choice}`;
    comp_score_value++;
    message.style.backgroundColor = "red";
  } else if (user_choice === "paper" && comp_choice === "rock") {
    message.innerText = `user wins! computer choise is ${comp_choice}`;
    user_score_value++;
    message.style.backgroundColor = "green";
  } else if (user_choice === "rock" && comp_choice === "paper") {
    message.innerText = `computer wins! computer choise is ${comp_choice}`;
    comp_score_value++;
    message.style.backgroundColor = "red";
  }
// this code is written to make winner at 10 points  
//   else if (user_score_value === 10) {
//     message.innerText = `user won`;
//     message.style.backgroundColor = "green";
//     user_score_value = 0;
//     reset.innerText="play again"
//     rock.removeEventListener()
//   }
//   else if (comp_score_value === 10) {
//     message.innerText = `computer won`;
//     message.style.backgroundColor = "red";
//     comp_score_value = 0;
//     reset.innerText="play again"
//     rock.removeEventListener()
//   }
  comp_score.innerText = comp_score_value;
  user_score.innerText = user_score_value;
}

reset.addEventListener("click", () => {
  comp_score_value = 0;
  user_score_value = 0;
  comp_score.innerText = comp_score_value;
  user_score.innerText = user_score_value;
  message.innerText = "Play your move";
  message.style.backgroundColor = "rgb(54, 174, 174)";
});
