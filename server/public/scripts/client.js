const app = angular.module('myApp',[])
const apiKey = 'KsGqHnc5Rp9pURi4iIEBX4ILYTzvv39L';
const giphyURL = 'https://api.giphy.com/v1/gifs';


const SearchController = app.controller('SearchController', ['$http', function($http){
  let self = this;
  self.searchOut = '';

  self.searchGiphy = function (searchBar){
    console.log(searchBar);
    $http({
      method: 'GET',
      url: `${giphyURL}/search?q=${searchBar}&api_key=${apiKey}`
    })
    .then(function(response){
      console.log('success in search', response);
      console.log(response.data.data[0].images.downsized.url, 'giflink');
      self.searchOut = response.data.data[0].images.downsized.url;
    })
    .catch(function(error){
      console.log('error in search', error);
    })
  }
  //end searchGiphy

  console.log('inside SearchController');
}]);//end SearchController


const RandomController = app.controller('RandomController', ['$http', function($http){
  let self = this;
  self.randomOut = '';

  self.randomGiphy = function (){
    console.log('inrandom');
    $http({
      method: 'GET',
      url: `${giphyURL}/random?api_key=${apiKey}`
    })
    .then(function(response){
      console.log('success in random', response);
      console.log(response.data.data.images.downsized.url, 'giflink');
      self.randomOut = response.data.data.images.downsized.url;
    })
    .catch(function(error){
      console.log('error in random', error);
    })
  }//end searchGiphy

}]);//end SearchController
