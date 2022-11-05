class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("zagraj").addEventListener("click", this.startGame);
        this.spanWallet = document.querySelector(".panel span.wallet");// stan twoich śropdków to//
        this.spanResult = document.querySelector(".score span.result");
        this.resultGameNumber = document.querySelector(".score span.gameNumber");
        this.resultWin = document.querySelector(".score span.win");
        this.resultLost = document.querySelector(".score span.lost");
        this.inputBid = document.getElementById("bid");
        this.colorsBoard = [...document.querySelectorAll("div.color")];
        console.log(this.spanWallet);
        console.log(this.spanResult);
        console.log(this.resultGameNumber);
        console.log(this.resultWin);
        console.log(this.resultLost);
        console.log(this.inputBid);
        console.log(this.colorsBoard);
        this.render();
    }
    render(money = this.wallet.getWalletValue(), result = 0, winningMoney = 0, bid= 0, stats = [0, 0, 0], colors = ["pink", "pink", "pink"]) {
        this.spanWallet.textContent = money;
        if (result) { result = `Wygrałeś ${winningMoney}` }
        else if (!result && result != "") {
            result = `Przegrałeś ${bid}`
        };
        this.spanResult.textContent = result;
        this.resultGameNumber.textContent = stats[0];
        this.resultWin.textContent = stats[1];
        this.resultLost.textContent = stats[2];
        this.colorsBoard.forEach((colorBord, index) => { colorBord.style.backgroundColor = colors[index] })

    }
    startGame() {

    }
}

