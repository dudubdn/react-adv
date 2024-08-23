import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});
	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldCart) => {
			const productInCart: ProductInCart = oldCart[product.id] || { ...product, count: 0 };
			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return { ...oldCart, [product.id]: productInCart };
			}
			const { [product.id]: toDelete, ...rest } = oldCart;
			return { ...rest };
		});
	};
	return {
		shoppingCart,
		onProductCountChange,
	};
};
