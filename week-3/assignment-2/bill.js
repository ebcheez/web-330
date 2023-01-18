/* 
==========================================================================
; Title: bill.js
; Author: Eric McCool
; Date: 17 January 2023
; Description: The bill class for restaurant.html
==========================================================================
*/

export class Bill {

	this._beverages = [];
	this._appetizers = [];
	this._mainCourses = [];
	this._desserts = [];

	function addBeverage(beverage) {
		this._beverages.push(beverage);
	}

	function addAppetizer(appetizer) {
		this._appetizers.push(appetizer);
	}

	function addMainCourse(mainCourse) {
		this._mainCourses.push(mainCourse);
	}

	function addDessert(dessert) {
		this._desserts.push(dessert);
	}

	function getTotal() {
		let total = 0;

		let beverageTotal = this._beverages.forEach(function(beverage) {
			total += parseFloat(beverage.price);
		})

		let appetizerTotal = this._appetizers.forEach(function(appetizer) {
			total += parseFloat(appetizer.price);
		})

		let mainCourseTotal = this._mainCourse.forEach(function(mainCourse) {
			total += parseFloat(mainCourse.price);
		})

		let dessertTotal = this._desserts.forEach(function(dessert) {
			total += parseFloat(dessert.price);
		})

		return total.toFixed(2);
	}	
}