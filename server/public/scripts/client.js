const app = angular.module('myApp',['angularUtils.directives.dirPagination'])



const apiKey = 'KsGqHnc5Rp9pURi4iIEBX4ILYTzvv39L';
const giphyURL = 'https://api.giphy.com/v1/gifs';


const SearchController = app.controller('SearchController', ['$http', function($http){

  let self = this;
  let index = 0;
  self.searchOut = '';
    self.favArray = [];

  self.searchGiphy = function (searchBar, index){
    console.log(searchBar, index);
    $http({
      method: 'GET',
      url: `${giphyURL}/search?q=${searchBar}&api_key=${apiKey}`
    })
    .then(function(response){
      console.log('success in search', response);
      console.log(response.data.data, 'giflink');
      // self.searchOut = response.data.data;
      self.searchOut = response.data.data[index].images.downsized.url;
    })
    .catch(function(error){
      console.log('error in search', error);
    })
  }
  //end searchGiphy

self.nextButton = function (searchBar){
  console.log(index);
  index++;
  console.log(index);

  self.searchGiphy(searchBar, index)

}
//end nextButton

self.prevButton = function (searchBar){
  console.log(index);
  index--;
  console.log(index);

  self.searchGiphy(searchBar, index)

}
//end nextButton

self.saveClick = function (gif){
  console.log('in save button', gif);
  $http({
    method: 'POST',
    url: '/giphy',
    data: {gif: gif}
  })
  .then(function(response){
    console.log('success in post', response);
  })
  .catch(function(error){
    console.log('error in post', error);
  })
}

self.displayFavs = function (){

  console.log('in diisplayfavs');
  $http({
    method: 'GET',
    url: '/giphy'
  })
  .then(function(response){
    console.log('success in get', response);
    self.favArray = response.data;
    console.log(self.favArray);
  })
  .catch(function(error){
    console.log(error, 'error in get');
  })
}


//end displayFavs






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
