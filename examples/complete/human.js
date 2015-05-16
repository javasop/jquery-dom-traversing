/**
 * Created by osama on 4/4/2015.
 */

var app = angular.module('human', ['hand','leg','head']);


app.controller('HumanController', function ($scope,humanData,handData,headData) {
    handData.fingers = 6
    headData.get().success(function(hData){
        console.log(hData);
    })
});

app.config(function(humanDataProvider){
    humanDataProvider.setType("super human");
});

app.service('humanData', function () {
    this.name = "steph";
    this.age = 25;
    this.height = 6;
});
app.factory('humanData', function () {
    return {
        name: "Steph",
        age:25,
        height:6
    };
});
app.provider("humanData", function () {
    var type;
    //configuration functions, called within app.config
    this.setType = function(t){
        type = t;
    };
    this.$get = function(){
        return {
            name: "Steph",
            age:25,
            height:6,
            type:type
        };
    }
});
