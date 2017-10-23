angular.module('myApp.profile',['ngRoute'])
 .config(['$routeProvider',function($routeProvider){

 $routeProvider
  .when('/profile',{
templateUrl:'profile/profile.html',
controller:'profileCtrl'
});//when
}])//config
.controller('profileCtrl',function(){
 console.log('profilen');
});//controller