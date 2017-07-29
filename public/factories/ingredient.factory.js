(function() {
	angular.module('laBelleAssiette')
    .factory('IngredientFactory', ['$http', IngredientFactory])
  
  function IngredientFactory($http) {
    let o = {};
    let url = '/api/ingredient';

    o.getAll = () => {
      return $http.get(url)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    };

    o.insert = function(ingredient){
      return $http.post('/api/ingredient', ingredient)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    }

    o.update = function(ingredient){
      return $http.put('/api/ingredient' + '/' + ingredient._id, ingredient)
        .then(function(res){
          return res.data;
        }, function(res){
          console.log(res);
        });
    }

    o.delete = function(ingredient){
      $http.delete('/api/ingredient' + '/' + ingredient._id);
    }

    return o;
  }
})();