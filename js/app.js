let landMine = new Vue({
    el: "#mineGame",
    data: {
        land: initData(10),
        remainMines:mines.length,
        times:0,
    },
    methods: {
        refreshData: function (value) {
            this.land = initData(value);
            console.log(this.land);
        },
        openBox: function (cell) {
            if(cell.isFlag==true){
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
        },
        showBlank: function (cell) {
            
            // if(cell=={}){
            //     return;
            // }
            cell.isBlank=true;
            cell.isCover=false;
            // cell的点击事件失效

            // let posX = cell.id.split('-')[0];
            // let posY = cell.id.split('-')[1];

            // for (let x = posX - 1; x < posX + 2; x++) {
            //     for (let y = posY - 1; y < posY + 2; y++) {
            //     //    console.log(this.land[x][y]==undefined);
            // // console.log(this.land[0][11]==undefined);


            //         if(this.land[x][y]==undefined){
            //             continue;
            //         }
            //         if (x == posX && y == posY) {
            //             continue;
            //         }
            //         switch (this.land[x][y].value) {
            //             case 0:
            //                 this.showBlank(this.land[x][y]);
            //                 break;
            //             case 9:
            //                 // 存疑，直接break还是使用continue?
            //                 break;
            //             default:
            //                 this.showValue(this.land[x][y]);
            //                 break;
            //         }

            //     }
            // }

        },
        showValue: function (cell) {
            cell.isCover=false;
            // cell的点击事件失效
            //如果点击事件失效设置成功，则可将stickFlag前的判断条件删除
        },
        boom: function () {
            for(let i=0;i<mines.length;i++){
                mines[i].isCover=false;
                mines[i].isMine=true;
            }

            // 整个table的点击事件失效
            // for(let i=0;i<this.land[i].length;i++){
            //     for(let j=0;j<this.land[j].length;j++){
            //         unClick=true;
            //     }
            // }
        },
        stickFlag:function(cell){
            if(cell.isCover==false){
                return;
            }
            cell.isFlag=!cell.isFlag;
            this.countMines(cell);  
        },
        countMines:function(cell){
            if(cell.isFlag===true){
                this.remainMines--;
            }
            if(cell.isFlag===false){
                this.remainMines++;
            }
        },
        countTimes:function(){
            this.times++;
        }
    }

})