import { styled } from '@mui/material'
import OrderCount from './OrderCount'

function Card ({product}) {

    return <Container key={product.id}>
        <div>
            <img src={product.pictures[0]} alt={name}/>
        </div>
        <div className='product_content'>
            <div className='product_title'>
                <h4>
                    <a>{product.name}</a>
                </h4>
                <div className='product_category'>
                    <div>
                        <a>{product.category}</a>
                        <a>{product.subcategory}</a>
                    </div>
                    <small>{product.dueDate}</small>
                </div>
            </div>
            <div className='product_bottom'>
                <div className='product_description'>
                    <p>{product.description}</p>
                </div>
                <div>
                    <div className='product_price'>
                        <span>{Number(product.price).toFixed(2)}$</span>
                    </div>
                    <OrderCount size={0} product={product}/>
                </div>
            </div>
                {/*<button onClick={()=>handleClick(product)}>Add to basket</button>*/}
        </div>
    </Container>
}

const Container = styled('div')({
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    borderRadius: '0.5rem',
    height: '25rem',
    overflow: 'hidden',

    '&:hover': {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        transform: 'scale(1.025)',
    },

    '.product_content': {
        padding: '1rem',
    },

    '.product_title': {
        overflow: 'hidden',
        height: '4rem',
    },

    '.product_title > h4': {
        marginBottom: '0.5rem',
        overflow: 'hidden',
        lineClamp: 2,
        textOverflow: 'ellipsis',

        fontSize: '1.5rem',
        fontWeight: '500',
        lineHeight: '1.2',
        color: '#343A40',
    },

    '.product_category': {
        display: 'flex',
        justifyContent: 'space-between',
    },

    '.product_category > div': {
        display: 'flex',
        gap: '0.5rem',
        position: 'relative',
        justifyContent: 'space-between',
    },

    '.product_category a': {
        fontSize: '0.8rem',
        display: 'block',
        color: '#007bff',
    },

    '.product_category small': {
        position: 'relative',
        display: 'flex',
        textAlign: 'center',
        color: '#6c757d',
    },

    '.product_description': {
        display: 'flex',
        justifyContent: 'space-between',
        height: '3.5rem',
        color: '#65778a',
    },

    '.product_description + div': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        alignItems: 'center',
    },

    '& img': {
        position: 'relative',
        height: '12rem',
        width: '100%',
        objectFit: 'cover',
    },

    '.product_price': {
        color: '#3889e8',
        fontSize: '1.7rem',
        fontWeight: '500',
    },
})

export default Card