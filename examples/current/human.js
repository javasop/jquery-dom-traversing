/**
 * Created by osama on 4/4/2015.
 */

var hand = angular.module('hand',[]);

hand.service('handModel',function(){
    this.fingers = 3;
})

var human = angular.module('human', ['hand']);


human.config(function($httpProvider,humanModelProvider){

    humanModelProvider.setRace("White");
    $httpProvider.headers.common = "my headers";

});

human.controller('HumanController', function ($scope,humanModel,handModel,$http) {

    //$scope.age = humanModel.age;

    $scope.race = humanModel.race;

    //$scope.fingers = handModel.fingers;
    //
    //humanModel.getFromExternal().success(function(data){
    //    $scope.data = data;
    //})

});

human.provider('humanModel',function(){

    //var myRace;
    //
    //this.setRace = function(race){
    //    myRace = race;
    //};

    this.$get = function(){

        return{
            race : function(){
                if(myRace == "white"){
                    return "my race is white"
                }
            },
            age : 21,
            height : 6
        }
    }


});

human.service('humanModel', function ($http) {

    this.name = "steph";
    this.age = 25;
    this.height = 6;
    this.getFromExternal = function(){
        return $http.get('external');
    }
    ///....
});
