class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("zagraj").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector(".panel span.wallet");// stan twoich śropdków to//
        this.spanResult = document.querySelector(".score span.result");
        this.resultGameNumber = document.querySelector(".score span.gameNumber");
        this.resultWin = document.querySelector(".score span.win");
        this.resultLost = document.querySelector(".score span.lost");
        this.inputBid = document.getElementById("bid");
        this.colorsBoard = [...document.querySelectorAll("div.color")];
        this.render();
    }
    render(money = this.wallet.getWalletValue(), result = 0, winningMoney = 0, bid = 0, stats = [0, 0, 0], colors = ["pink", "pink", "pink"]) {
        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${winningMoney}$`
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$`
        }
        this.spanResult.textContent = result;
        this.resultGameNumber.textContent = stats[0];
        this.resultWin.textContent = stats[1];
        this.resultLost.textContent = stats[2];
        this.colorsBoard.forEach((colorBord, index) => { colorBord.style.backgroundColor = colors[index] })
        this.inputBid.value = "";
    }
    startGame() {

        if (this.inputBid.value.length === 0) {
            return alert("Podaj stawkę");
        }

        if (this.inputBid.value < 1) return alert("Stawka musi być więszka niż 0.");
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            alert("Zmniejsz wysokość zakładu lub brak środków do dalszej gry")
            return
        }

        this.draw = new Draw();
        const colors = this.draw.drawGetResult();
        const win = Result.checkWinner(colors);
        let winningMoney=0;
        if (win) {
            winningMoney = Result.moneyWinInGame(win, bid);
            console.log(winningMoney);
            this.wallet.changeWallet(winningMoney);
        }
        else {
           this.wallet.changeWallet(bid, "-");
        }

        this.stats.addGameToStatistics(win, bid);
        this.render(this.wallet.getWalletValue(), win, winningMoney, bid, this.stats.showGameStatistics(), colors);
    }
}

