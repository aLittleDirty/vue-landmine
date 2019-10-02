let landMine = new Vue({
    el: "#mineGame",
    data: {
        land: initData(10),
    },
    methods: {
        refreshData: function (value) {
            this.land = initData(value);
            console.log(this.land);
        },
        openBox: function (cell) {
            let value = cell.value;
            if (value == 0) {
                this.openBlank(cell);
            }
            if (value > 0 && value < 9) {
                this.showValue(cell);
            }
            if (value == 9) {
                this.boom();
            }
        },
        openBlank: function (cell) {
            // cell的背景样式变为空格背景
            // cell的点击事件失效

            let posX = cell.id.split('-')[0];
            let posY = cell.id.split('-')[1];
            for (let x = posX - 1; x < posX + 2; x++) {
                for (let y = posY - 1; y < posY + 2; y++) {
                    if (x == posX && y == posY) {
                        continue;
                    }
                    switch (this.land[x][y].value) {
                        case 0:
                            this.openBlank(this.land[x][y]);
                            break;
                        case 9:
                            this.boom();
                            break;
                        default:
                            this.showValue(this.land[x][y]);
                    }

                }
            }

        },
        showValue: function (cell) {
            let value = cell.value;
            // cell的背景样式为value
            // cell的点击事件失效
        },
        boom: function () {
            // 全部value为9的cell的背景样式为雷
            // 整个table的点击事件失效
        }
    }

})