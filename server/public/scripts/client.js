const app = angular.module('myApp',[])
const apiKey = 'KsGqHnc5Rp9pURi4iIEBX4ILYTzvv39L';
const giphyURL = 'https://api.giphy.com/v1/gifs';


const SearchController = app.controller('SearchController', ['$http', function($http){
  let self = this;
  let index = 0;
  self.searchOut = '';

  self.searchGiphy = function (searchBar, index){
    console.log(searchBar, index);
    $http({
      method: 'GET',
      url: `${giphyURL}/search?q=${searchBar}&api_key=${apiKey}`
    })
    .then(function(response){
      console.log('success in search', response);
      console.log(response.data.data[index].images.downsized.url, 'giflink');
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

}//end nextButton


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
