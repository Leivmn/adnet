import { styled } from '@mui/material'
import logo from '../assets/react.svg'
import HorizontalSplitRoundedIcon from '@mui/icons-material/HorizontalSplitRounded'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'
import OrderCount from './OrderCount'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket } from '../features/Products/basketSlice.js'

function Basket({ isOpen, show }) {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();
    const handleRemoveFromBasket = ({ product }) => {
        const { id } = product;
        dispatch(removeFromBasket({ id }));
    }

    return (
        <Container>
            <div className='mobile-side'>
                <button onClick={() => show(!isOpen)}>
                    <HorizontalSplitRoundedIcon/>
                </button>
            </div>
            <Side isOpen={isOpen}>
                <button className='basket-btn'
                        onClick={() => show(!isOpen)}>
                    <NavigateNextRoundedIcon className='basket-btn_icon'/>
                </button>
                <div className='side_content'>
                    <div className='logo_section'>
                        <img src={logo} alt="logo"/>
                        <h2>Basket</h2>
                    </div>
                    <div className='products_section'>
                        {basket.length === 0 && (
                            <span className='emptyText'>
                        Your basket is currently empty
                    </span>
                        )}
                        {basket.map((product) => (
                            <ProductRow key={product.id}>
                                <img src={product.pictures[0]} alt={product.name}/>
                                <div className='product_content'>
                                    <h4>{product.name}</h4>
                                    <div className='product_price'>
                                        <OrderCount size={1} product={product}/>
                                        <span>{Number(product.price * product.amount).toFixed(2)}$</span>
                                    </div>
                                </div>
                                <button onClick={() => handleRemoveFromBasket({ product })}>
                                    <DeleteForeverRoundedIcon/>
                                </button>
                            </ProductRow>
                            // <button onClick={() => handleDelete(product.id)}>Hello {product.name}</button>
                        ))}
                    </div>
                </div>
                <button>Checkout</button>
            </Side>
        </Container>
    )
}

//#region Styled Components
const Container = styled('div')(({ theme }) => ({
    '.mobile-side': {
        backgroundColor: 'transparent',
        width: '100%',
        height: 40,
        display: 'none',
        overflow: 'hidden',
    },

    '.mobile-side button': {
        color: '#fff',
        backgroundColor: 'blue',
        outline: 'none',
        border: 'none',
        margin: '0 10',
    },

    [theme.breakpoints.down(450)]: {
        'mobile-side': {
            display: 'flex',
            alignItems: 'center',
        },
    },
}))

const Side = styled('div')(({ isOpen, theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '15%',
    minHeight: '100%',
    backgroundColor: '#191e27',
    color: '#fff',
    //padding: '2rem 1rem 1rem 1rem',
    transition: 'transform 1s',

    ...(!isOpen && {
        transform: 'translateX(100%)',
    }),

    '.basket-btn': {
        transform: 'translateX(-38px)',
        position: 'absolute',
        top: 20,
        left: 0,
        width: 40,
        height: 60,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191e27',
        outline: 'none',
        border: 'none',
        padding: '5 10',
        cursor: 'pointer',
        color: '#fff',
        transition: 'all 0.3s',
    },

    '.basket-btn_icon': {
        fontSize: '2rem',
        transform: !isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 0.3s'
    },

    '.side_content': {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '3rem auto 3rem',
        gap: '2rem',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    '.logo_section': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginTop: '1rem'
    },

    '.logo_section img': {
        display: 'flex',
        maxWidth: '100%',
        height: 'auto',
    },

    '.side_content + button': {
        height: 'fit-content',
        padding: '0.5rem 4rem',
        color: '#fff',
        backgroundColor: '#3089f1',
        fontWeight: 'Bold',
        border: 'none',
        display: isOpen ? 'block' : 'none',
        cursor: 'pointer',
    },

    '.side_content + button:hover': {
        backgroundColor: '#157aef',
    },

    '.products_section': {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '0.5rem',
        paddingLeft: '1rem',
        overflow: 'hidden',
    },

    [theme.breakpoints.down(768)]: {
        width: '40%',
        padding: 10,
    },

    [theme.breakpoints.down(450)]: {
        width: '70%',
        top: 38,
        minHeight: 'calc(100vh - 38)',

        '.mobile-side > button': {
            display: 'none',
        }
    }
}))

const ProductRow = styled('div')({
    backgroundColor: '#222835',
    height: '5rem',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '3rem auto 2rem',
    gap: '1rem',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '0.5rem 0 0 0.5rem',

    '&:hover': {
        backgroundColor: '#333b4f',
    },

    'img': {
        position: 'relative',
        height: 'auto',
        width: '100%',
        objectFit: 'cover',
        borderRadius: '0.3rem'
    },

    '.product_content': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: '0.2rem',
        textAlign: 'left',
        overflow: 'hidden'
    },

    '.product_content + button': {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    },

    '.product_content + button > *': {
        color: 'white',
        fontSize: '2rem'
    },

    '.product_content h3': {
        height: '1.5rem',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    '.product_price': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
//#endregion

export default Basket