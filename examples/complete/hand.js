/**
 * Created by osama on 4/4/2015.
 */

var hand = angular.module('hand', []);

hand.controller('HandController', function ($scope,game) {
    console.log(game);
});
hand.service('handData',function(){
    this.fingers = 3;
    this.thumbPrint = "20000220200210101011";
});
