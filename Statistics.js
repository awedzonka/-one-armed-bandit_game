class Statistics {
    constructor() {
        this.gameResults = [
            { win: true, bid: 2 },
            { win: false, bid: -2 }
        ]
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
        console.log(gameResults);
    }
    showGameStatistics() {
        let gameNumber = this.gameResults.length;
        let winNumber = this.gameResults.filter(el => el.win).length;
        let loseGame = this.gameResults.filter(el => !el.win).length;
        console.log(gameNumber);
        console.log(winNumber);
        console.log(loseGame);
        return [gameNumber, winNumber, loseGame]


    }
}
// const stats = new Statistics();

// export default Statistics; 