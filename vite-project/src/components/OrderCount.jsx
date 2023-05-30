import { styled } from '@mui/material'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, decreaseFromBasket } from '../features/Products/basketSlice'
function OrderCount({product, size}) {
    const dispatch = useDispatch();
    const basketProduct = useSelector((state) =>
        state.basket.find(item => item.id === product.id));
    const amount = basketProduct ? basketProduct.amount : 0;

    const handleAddToBasket = () => {

        const {id, name, pictures, price} = product;
        dispatch(addToBasket({
            id,
            name,
            pictures,
            price,
            amount : 1
        }));
    }

    const handleDecreaseFromBasket = () => {
        if (amount > 0) {
            dispatch(decreaseFromBasket({
                id : product.id,
                amount : 1
            }))
        }
    }

    return (
        <Container size={size}>
            <button onClick={() => handleDecreaseFromBasket(product)}>
                <RemoveRoundedIcon/>
            </button>
            <input type='number' placeholder='' value={amount} disabled/>
            <button onClick={() => handleAddToBasket(product)}>
                <AddRoundedIcon/>
            </button>
        </Container>
    )
}

const Container = styled('div')(({size}) => ({
    display: 'grid',
    gridTemplateColumns: '2rem 2.5rem 2rem',
    backgroundColor: '#f5f5f5',
    padding: '0.2rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    width: 'fit-content',

    '& *': {
        display: 'flex',
        height: '2rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
    },

    '& input': {
        backgroundColor: '#f5f5f5',
        color: '#495057',
        fontSize: '1rem',
        fontWeight: '500',
        appearance: 'none',
        width: '100%',
        MozAppearance: 'textfield',
    },

    '& button': {
        backgroundColor: '#fff',
        color: '#495057',
        fontSize: '1rem',
        fontWeight: '500',
        borderRadius: '0.2rem 0 0 0.2rem',
        cursor: 'pointer',
    },

    '& button:hover': {
        backgroundColor: '#e6e6e6',
    },

    '& button:last-child': {
        borderRadius: '0 0.2rem 0.2rem 0',
    },

    ...(size === 1 && {
        gridTemplateColumns: '1rem 1.5rem 1rem',
        '*': {
            height: '1.5rem',
            fontSize: '1rem',
        },
    }),
}))

export default OrderCount