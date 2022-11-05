class Draw {
    constructor() {
        this.options = ["red", "blue", "green"];
        let _result = this.drawResult();
        this.drawGetResult = () => _result;
    }
    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            let color = this.options[index];
            colors.push(color);
        }
        return colors;
    }
}

// const draw = new Draw();
// export default Draw;