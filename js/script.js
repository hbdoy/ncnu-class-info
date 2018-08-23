var db = firebase.database();
db.ref("/sport/allClass").on('value', function (snap) {
    app.allSportClass = snap.val();
})
db.ref("/other/allClass").on('value', function (snap) {
    app.allOtherClass = snap.val();
})

var app = new Vue({
    el: "#app",
    data: {
        chosenClass: "other",
        allSportClass: "",
        allOtherClass: "",
        filterText: "",
    },
    methods: {},
    computed: {
        myClass: function () {
            var allClass_tmp = {};
            if (this.chosenClass == "other") {
                allClass_tmp = this.allOtherClass;
            } else if (this.chosenClass == "sport") {
                allClass_tmp = this.allSportClass;
            }
            if (this.filterText == "") {
                return allClass_tmp;
            } else {
                var tmp = {};
                for (var key in allClass_tmp) {
                    if (allClass_tmp.hasOwnProperty(key)) {
                        if((key.toUpperCase()).indexOf((this.filterText).toUpperCase()) != -1){
                            tmp[key] = allClass_tmp[key];
                        }
                    }
                }
                return tmp;
            }
        }
    }
});
