/* 
==========================================================================
; Title: appetizer.js
; Author: Eric McCool
; Date: 17 January 2023
; Description: The appetizer class for restaurant.html
==========================================================================
*/

import { Product } from "./products.js";

export class Appetizer extends Product {

	constructor(name, price) {
		super(name, price);
	}
}

