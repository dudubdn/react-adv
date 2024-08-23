
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'
const product = {
    id: '2',
    title: 'Coffe Mug - Card',
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={product} style={{}}>
                    <ProductCard.Image className='custom-img' style={{ margin: '10px', width: 'calc(100% - 20px)', padding: '0px', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductCard.Title className='text-bold' style={{ color: 'violet' }} />
                    <ProductCard.Buttons style={{}} />
                </ProductCard>
                <ProductCard
                    className='bg-dark text-white'
                    product={product} >
                    <ProductImage className='custom-img' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
            </div>
        </div>

    )
}
