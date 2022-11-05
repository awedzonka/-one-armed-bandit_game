class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(100);
        document.getElementById("zagraj").addEventListener("click", this.startGame);
        

        
    }

    render() {

    }
    startGame() {

    }
}
const game= new Game();
