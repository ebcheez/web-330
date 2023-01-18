/* 
==========================================================================
; Title: beverage.js
; Author: Eric McCool
; Date: 17 January 2023
; Description: The beverage class for restaurant.html
==========================================================================
*/

import { Product } from "./product.js";

export class Beverage extends Product {

	constructor(name, price) {
		super(name, price);
	}
}
