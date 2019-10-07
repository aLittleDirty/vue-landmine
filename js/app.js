let landMine = new Vue({
    el: "#mineGame",
    data: {
        land: initData(10),
        remainMines: mines.length,
        times: 0,
        timer: null,
        isStart: false,
        gameLevel:10,
        remainBox:10*10,
    },
    
    methods: {
       
        openBox: function (cell) {
            if (cell.isFlag == true) {
                return;
            }
            if(cell.isCover==false){
                return;
            }
            let value = cell.value;
            if (value == 0) {
                this.showBlank(cell);
            }
            if (value > 0 && value < 9) {
                this.showValue(cell);
            }
            if (value == 9) {
                this.boom();
            }
            if(this.remainBox==mines.length){
               this.winGame();
            }
            
        },

        showBlank: function (cell) {

           

            let posX = cell.id.split('-')[0];
            let posY = cell.id.split('-')[1];

            for (let x = posX - 1; x < posX + 2; x++) {
                for (let y = posY - 1; y < posY + 2; y++) {
                    if(x == posX && y == posY) {
                        continue;
                    }

                    if(x < 0 || y < 0) {
                        continue;
                    }

                    if(x >= this.gameLevel || y >= this.gameLevel) {
                        continue;
                    }
                   
                    if(this.land[x][y]!=undefined && this.land[x][y].isCover){
                        if(this.land[x][y].value==9){
                            continue;
                        }
                        if(this.land[x][y].value>0 && this.land[x][y].value<9){
                            this.showValue(this.land[x][y]);
                            continue;
                        }
                        this.remainBox--;
                        this.land[x][y].isCover=false;
                        this.land[x][y].isBlank=true;
                        this.showBlank(this.land[x][y]);
                    }

                }
            }

        },
        showValue: function (cell) {
            cell.isCover = false;
            this.remainBox--;

        },
        boom: function () {
            for (let i = 0; i < mines.length; i++) {
                mines[i].isCover = false;
                mines[i].isMine = true;
            }
            this.isStart = false;
            clearInterval(this.timer);

        },
        stickFlag: function (cell) {
            if (cell.isCover == false) {
                return;
            }
            cell.isFlag = !cell.isFlag;
            this.countMines(cell);
        },
        countMines: function (cell) {
            if (cell.isFlag === true) {
                this.remainMines--;
            }
            if (cell.isFlag === false) {
                this.remainMines++;
            }
        },
        countTimes: function () {
            this.times++;
        },
        chooseLevel:function(value){
            this.gameLevel=value;
        },
        startGame: function () {
            this.isStart = true;
            this.times = 0;
            this.timer = setInterval(this.countTimes, 1000);
            this.land=initData(this.gameLevel);
            this.remainBox=this.gameLevel*this.gameLevel;
            this.remainMines=mines.length;
        },
        winGame:function(){
            alert('you win!');
        }
    }

})