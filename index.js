let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function add1H(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2H(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3H(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1G(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2G(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3G(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function restart(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}
