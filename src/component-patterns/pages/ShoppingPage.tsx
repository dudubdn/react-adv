import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../components/data/products.data';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        className='bg-dark text-white'
                        product={product}
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count}
                    >
                        <ProductImage className='custom-img' />
                        <ProductTitle className='text-bold' />
                        <ProductButtons className='custom-buttons' />
                    </ProductCard>
                ))}
            </div>
            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([id, product]) => (
                    <ProductCard
                        key={id}
                        className='bg-dark text-white'
                        style={{
                            width: '150px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        product={product}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage className='custom-img' />

                        <ProductButtons
                            className='custom-buttons'
                            style={{ display: 'flex', justifyContent: 'center' }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
