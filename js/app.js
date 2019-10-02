let landMine = new Vue({
    el: "#mineGame",
    data: {
        land: initData(10),
    },
    methods: {
        refreshData: function (value) {
            this.land = initData(value);
            console.log(this.land);
        }
    },

})