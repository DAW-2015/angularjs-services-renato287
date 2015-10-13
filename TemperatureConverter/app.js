var app = angular.module('myApp', []);

app.factory('TemperatureService', function() {
  var temperatureService = {};

  temperatureService.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };
  temperatureService.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };
  
  return temperatureService;
});


app.controller('TemperatureController', ['TemperatureService', function(temperatureService) {

  this.celsius = 32.0;

  this.celsiusToKelvin = function() {
    return temperatureService.celsiusToKelvin(this.celsius);
  };

  this.celsiusToFahrenheit = function() {
    return temperatureService.celsiusToFahrenheit(this.celsius);
  };

}]);
