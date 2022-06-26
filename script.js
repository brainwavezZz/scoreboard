let scoreHome = 0
let scoreAway = 0
let homescore = document.getElementById("points-home")
let awayscore = document.getElementById("points-guest")

// 1 --> Teamhome
// 2 --> TeamAway

function add1(team){
    if (team === 1)
    {
        scoreHome += 1
        homescore.textContent = scoreHome
    }

    else
    {
        scoreAway += 1
        awayscore.textContent = scoreAway
    }

}

function add2(team){
    if (team === 1)
    {
        scoreHome += 2
        homescore.textContent = scoreHome
    }

    else
    {
        scoreAway += 2
        awayscore.textContent = scoreAway
    }

}

function add3(team){
    if (team === 1)
    {
        scoreHome += 3
        homescore.textContent = scoreHome
    }

    else
    {
        scoreAway += 3
        awayscore.textContent = scoreAway
    }

}

function reset(){
    scoreHome = 0;
    scoreAway = 0;
    
    console.log(scoreHome)
    
    homescore.textContent = scoreHome;
    awayscore.textContent = scoreAway;
}