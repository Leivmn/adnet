import { styled } from '@mui/material'
import { useState } from 'react'
import Basket from '../components/Basket'
import Card from '../components/Card.jsx'
import { useSelector } from 'react-redux'

function InventoryCart() {
    const products = useSelector(state => state.product);
    const [sideVisible, showSidebar] = useState(false);

    return (
        <Container>
            <ProductsList sideVisible={sideVisible}>
                <div className='products'>{
                    products.map((product) => (
                        <Card key={product.id}
                              product={product}
                        />
                    ))}
                </div>
            </ProductsList>
            <Basket isOpen={ sideVisible } show={ showSidebar }/>
        </Container>
    )
}

//#region Styled Components
const Container = styled('div')(({ sideVisible, theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',

    [theme.breakpoints.down('sm')]: {
        width: sideVisible ? '100%' : '',
        marginLeft: sideVisible ? 0 : '',
    },
}))

const ProductsList = styled('div')(({ sideVisible }) => ({
    height: '100%',
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 1s',
    marginRight: !sideVisible ? '' : '15%',

    '.products': {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
        height: '100%',
        width: '100%',
        gap: '2rem',
        padding: '2rem',
        overflow: 'auto',
    }
}))
//#endregion
export default InventoryCart