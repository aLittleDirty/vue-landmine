var CONSTANT = require(['./config.js'],function(config){
    alert('done: '+ config.CONSTANT.MINE);
});
(function (exports) {

    let land=[];
    exports.mines=[];

    function drawLand(num) {
        for (let i = 0; i < num; i++) {
            let row = [];
            for (let j = 0; j < num; j++) {
                row.push({value:CONSTANT.BLANK,id:i+'-'+j,isMine:false,isBlank:false,isCover:true,isFlag:false})
            }
            land.push(row);
        }
    };

    function setMine(num) {
        // min和range值的设定没有参考
        let min = num;
        let range = num * 2;
       let  minesNumber = Math.floor(Math.random() * range + min);

        for (let i = 0; i < minesNumber; i++) {
            let posX = Math.floor(Math.random() * num);
            let posY = Math.floor(Math.random() * num);
            if (land[posX][posY].value == CONSTANT.MINE) {
                i--;
                continue;
            }
            land[posX][posY].value = CONSTANT.MINE;
            mines.push(land[posX][posY]);
        }
    };

    function matchMinesData(num) {

        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                if (land[i][j].value == CONSTANT.MINE) {
                    continue;
                }


                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (land[i - 1][j - 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (i - 1 >= 0) {
                    if (land[i - 1][j].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (i - 1 >= 0 && j + 1 < num) {
                    if (land[i - 1][j + 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (j - 1 >= 0) {
                    if (land[i][j - 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (j + 1 < num) {
                    if (land[i][j + 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (i + 1 < num && j - 1 >= 0) {
                    if (land[i + 1][j - 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (i + 1 < num) {
                    if (land[i + 1][j].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
                if (i + 1 < num && j + 1 < num) {
                    if (land[i + 1][j + 1].value == CONSTANT.MINE) {
                        land[i][j].value++;
                    }
                };
            }
        }

    };
   
    exports.initData = function (num) {
        land.length=0;
        mines.length=0;

        drawLand(num);
        setMine(num);
        matchMinesData(num);

        console.log(land);
        console.log(mines.length);
        return land;
        
    }

})(window);