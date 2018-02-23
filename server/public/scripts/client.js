const app = angular.module('myApp',[])

const SearchController = app.controller('SearchController', ['$http', function($http){
  let self = this;

  console.log('inside SearchController');
}]);//end SearchController


const RandomController = app.controller('RandomController', ['$http', function($http){
  let self = this;

  console.log('inside RandomController');
}]);//end SearchController
