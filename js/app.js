var app = angular.module("app", ["firebase"])
    .constant('FIREBASE_URL','https://repo-test-rslusarczyk.firebaseio.com/')
    
    .controller("myCtrl", function($scope, ItemsService) {
        $scope.items = ItemsService.getItems();
        $scope.addItem = function(text) {
            ItemsService.addItem({text: text});
            
        }
        $scope.removeItem = function(id) { 
            ItemsService.removeItem(id);
        }
        
        $scope.updateItem = function(id) { 
            $scope.startEdit = false;
            ItemsService.updateItem(id);
        }
    })
    
    .factory('ItemsService', function($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL + "/items");
        var sync = $firebase(ref);
        var items = sync.$asArray()
        
        var getItems = function() {
            return items;
        };
        
        var addItem = function(item) {
            items.$add(item);
        }
        
        var removeItem = function(id) {
            items.$remove(id);
        }
        
        var updateItem = function(id) {
            items.$update(id);
        }
        return {
            getItems: getItems,
            addItem: addItem,
            removeItem: removeItem,
            updateItem: updateItem
        }
    })

