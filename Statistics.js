class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }
    showGameStatistics() {
        let gameNumber = this.gameResults.length;
        let winNumber = this.gameResults.filter(el => el.win).length;
        let loseGame = this.gameResults.filter(el => !el.win).length;
        return [gameNumber, winNumber, loseGame]


    }
}
// export default Statistics; 