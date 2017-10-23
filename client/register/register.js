angular.module('myApp.register',['ngRoute'])
 .config(['$routeProvider',function($routeProvider){

 $routeProvider
  .when('/register',{
templateUrl:'register/register.html',
controller:'registerCtrl'
});//when
}])//config
.controller('registerCtrl',function(){
 console.log('registern');
});//controller