
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const product = {
    id: '2',
    title: 'Coffe Mug - Card',
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {/* <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title='Hola Mundo' />
                    <ProductCard.Buttons increaseBy={function (value: number): void { throw new Error('sdf') }} counter={0} />
                </ProductCard> */}
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle title='Hola Mundo' />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>

    )
}
