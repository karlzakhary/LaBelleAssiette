/*
Name:
	app.js
	
Description:
	Defines the main application module for the Inventory Management application along with all application
	dependencies.

*/

angular.module('InventoryApplication', ['ui.bootstrap', 'ngRoute', 'appRoutes', 'GlobalService', 'DatabaseService', 'AddService', 'QueryService', 'HomeCtrl', 'QueryCtrl', 'AddCtrl']);
