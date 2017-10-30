angular
	.module('app')
	.factory('cartService', cartService);

function cartService () {

	return {
		addToCart: addToCart,
		getCountCart: getCountCart,
		totalCart: totalCart,
		getCart: getCart,
		setCart: setCart,
		removeItemCart: removeItemCart,
		clearCart: clearCart
	}
	
	function getCountCart () {
		var count = 0;
		if (localStorage['cart']) {
			var sum = 0;
			var aCart = getCart();

			for (var i in aCart) {
				count += aCart[i].count
			}
			return count;
		}
		return count;
	}

	function totalCart () {
		var total = 0;
		var sum = 0;
		var aCart = getCart();

		for (var i in aCart) {
			sum = aCart[i].price
			sum *= aCart[i].count
			total += sum
		}
		return total;
	}

	function addToCart (data) {
		var aCart = []
		aCart = getCart();
		if (Object.keys(aCart).length !== 0) {
			var key;
			if (key = checkItemCart(aCart, data)) {
				aCart[key].count++;
			} else {
				aCart.push(data);
			}
		} else {
			aCart.push(data);
		}
		setCart(aCart);
	}

	function checkItemCart (cart, data) {
		var key = false;
		for (var i in cart) {
			if (cart[i].id == data.id) {
				key = i;
			} 
		}	
		return key;
	}

	function setCart (data) {
		localStorage['cart'] = JSON.stringify(data);
	}

	function getCart () {
		return JSON.parse(localStorage['cart'] || '[]');
	}

	function clearCart () {
		localStorage.clear();
	}

	function removeItemCart (key) {
		var aCart = getCart();
		aCart.splice(key, 1)
		setCart(aCart);
	}
}