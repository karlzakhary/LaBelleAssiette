
  angular.module('laBelleAssiette')
    .component('ingredientList', {
      templateUrl: '/components/ingredients/ingredients.component.html',
      controller: ['lodash', 'IngredientFactory', IngredientListController]
    });
  
  function IngredientListController(lodash, IngredientFactory,$scope) {
    var self = this ;
    self.editItem = -1;
    self.updatedIngredient = null;
    self.newIngredient = null;
    

    IngredientFactory.getAll().then((res) => {
      self.ingredients = res;
    });

    self.insert = () => {
      if (self.newIngredient && self.newIngredient.name && self.newIngredient.name != "" && self.newIngredient.quantity && self.newIngredient.quantity != ""){
        IngredientFactory.insert(self.newIngredient).then((res) => {
          self.ingredients.push(res);
          self.newIngredient = null;
        });
      }
    }
    
    self.edit = (itemIndex) => {
      self.editItem = itemIndex;
      self.updatedIngredient = lodash.clone(self.ingredients[itemIndex]);
    }

    self.editionDone = (itemIndex) => {
      if (!lodash.isEqual(self.updatedIngredient, self.ingredients[itemIndex])){
        IngredientFactory.update(self.updatedIngredient).then((res) => {
          self.ingredients[itemIndex] = res;
        });
      }
      self.editItem = -1;
      self.updatedIngredient = null;
    }

    self.delete = (itemIndex) => {
      IngredientFactory.delete(self.ingredients[itemIndex]);
      self.ingredients.splice(itemIndex, 1);
    }
  }
;