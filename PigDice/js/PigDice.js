const loaded = () => {
    let games = 0;
    let highScore = 200;
    let score = 0;
    while(score < highScore){
        score = PlayPigDice();
        games++;
        if (score > highScore)
            highScore = score;
        }
    
    setScore(highScore, games);
}
const setScore = (score, games) => {
    let span = `<span>It took ${games} games to score ${score}</span>`;
    document.getElementById("score").innerHTML = span;
}
const roll = () => {
    return Math.floor(Math.random()*6) + 1;

}

const PlayPigDice = () => {
    let score = 0;
    let die = roll();
    while(die !=1) {
        score += die;
        die = roll();
    }
    return score;
}