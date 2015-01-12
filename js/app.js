var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;
    var url = 'https://gdata.youtube.com/feeds/api/users/orbitalofficial/uploads?alt=json-in-script&callback=JSON_CALLBACK';
    $http.get(url)
      .success(function(data) {
        app.people = data;
      })

})