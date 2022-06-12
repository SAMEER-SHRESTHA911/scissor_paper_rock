let userScore = 0;
let compScore = 0;
let computer;
let user;

const rock_div = document.getElementById("ro");
const paper_div = document.getElementById("pap");
const scissor_div = document.getElementById("sci");
const userScore_div = document.querySelector("#user-score p");
const compScore_div = document.querySelector("#comp-score p");
const end_div = document.querySelector(".end");

function convert(w)
{
    if(w == 'R') return "ROCK";
    if(w == 'S') return "SCISSOR";
    return "PAPER";
}
function computerSelection()
{
    const options = ['S','P','R'];
    const ranumber = Math.floor(Math.random()*3);
    return options[ranumber];
}
function win()
{
    userScore = Number(userScore)+1;
    console.log(userScore);
    userScore_div.textContent = userScore;
    compScore_div.textContent = compScore;
    console.log("Win");
}
function loss()
{
    compScore = Number(compScore) + 1;
    console.log(compScore);
    userScore_div.textContent = userScore;
    compScore_div.textContent = compScore;
    console.log("Loss");
}
function draw()
{
    console.log(userScore);
    userScore_div.textContent = userScore;
    compScore_div.textContent = compScore;
    console.log("Draw");
}
function compare(userChoice)
{
    const compChoice = computerSelection();
    const competition = userChoice + compChoice;
    console.log(competition);
    
    user = convert(userChoice);
    console.log(user);
    computer = convert(compChoice);
    console.log(computer);

    switch(competition)
    {
        case "SP":
        case "RS":
        case "PR":{
            win();
            end_div.innerText = `${user} [USER] beats ${computer} [COMPUTER]`;
            break;
        }
        case "PS":
        case "SR":
        case "RP":
           { 
            loss();
            end_div.innerText = `${computer} [COMPUTER] beats ${user} [USER]`;
            break;
        }
        case "SS":
        case "PP":
        case "RR":
           {
            draw();
            end_div.innerText = `${user} [USER] ties with ${computer} [COMPUTER]`;
            break;
        }    
    }

}
function userSelection()
{
    scissor_div.addEventListener("click", function() 
    {
        compare("S");
    })
    paper_div.addEventListener("click", function() 
    {
        compare("P");
    })
    rock_div.addEventListener("click", function()
    {
        compare("R");
    })
}
userSelection();