let homeScoreEl = document.getElementById("home-el")
let guestScoreEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0

function addOnePointHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    leadTeam()
}

function addTwoPointsHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    leadTeam()
}

function addThreePointsHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    leadTeam()
}

function addOnePointGuest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    leadTeam()
}

function addTwoPointsGuest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    leadTeam()
}

function addThreePointsGuest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    leadTeam()
}

function newGame(){
    homeScore =0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
    leadTeam()
}
function leadTeam(){
    if ( homeScore != 0 || guestScore != 0){
        if (homeScore > guestScore){
            homeScoreEl.style.border = "2px solid green"
            guestScoreEl.style.border = "2px solid red"
        } else if (guestScore > homeScore){
            guestScoreEl.style.border = "2px solid green"
            homeScoreEl.style.border = "2px solid red"
        }
    }else{
        homeScoreEl.style.border = "none"
        guestScoreEl.style.border = "none"
    }
}