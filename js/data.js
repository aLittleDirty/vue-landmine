(function (exports) {

     exports.mines = 0;
    let land=[];

    function drawLand(value) {
        for (let i = 0; i < value; i++) {
            let row = [];
            for (let j = 0; j < value; j++) {
                row[j] = 0;
            }
            land.push(row);
        }
    };

    function setMine(value) {
        // min和range值的设定没有参考
        let min = value;
        let range = value * 2;
        mines = Math.floor(Math.random() * range + min);

        for (let i = 0; i < mines; i++) {
            let posX = Math.floor(Math.random() * value);
            let posY = Math.floor(Math.random() * value);
            if (land[posX][posY] == 9) {
                i--;
                return;
            }
            land[posX][posY] = 9;
        }
    };

    function matchMinesData(value) {

        for (let i = 0; i < value; i++) {
            for (let j = 0; j < value; j++) {
                if (land[i][j] == 9) {
                    continue;
                }


                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (land[i - 1][j - 1] == 9) {
                        land[i][j]++;
                    }
                };
                if (i - 1 >= 0) {
                    if (land[i - 1][j] == 9) {
                        land[i][j]++;
                    }
                };
                if (i - 1 >= 0 && j + 1 < value) {
                    if (land[i - 1][j + 1] == 9) {
                        land[i][j]++;
                    }
                };
                if (j - 1 >= 0) {
                    if (land[i][j - 1] == 9) {
                        land[i][j]++;
                    }
                };
                if (j + 1 < value) {
                    if (land[i][j + 1] == 9) {
                        land[i][j]++;
                    }
                };
                if (i + 1 < value && j - 1 >= 0) {
                    if (land[i + 1][j - 1] == 9) {
                        land[i][j]++;
                    }
                };
                if (i + 1 < value) {
                    if (land[i + 1][j] == 9) {
                        land[i][j]++;
                    }
                };
                if (i + 1 < value && j + 1 < value) {
                    if (land[i + 1][j + 1] == 9) {
                        land[i][j]++;
                    }
                };
            }
        }

    };
    exports.initData = function (value) {
        land=[];
        drawLand(value);
        setMine(value);
        matchMinesData(value);
        return land;
    }

})(window);