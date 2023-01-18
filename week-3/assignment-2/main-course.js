/* 
==========================================================================
; Title: main-course.js
; Author: Eric McCool
; Date: 17 January 2023
; Description: The main-course class for restaurant.html
==========================================================================
*/

import { Product } from "./product.js"

export class Appetizer extends Product {

	constructor(name, price) {
		super(name, price);
	}
}

