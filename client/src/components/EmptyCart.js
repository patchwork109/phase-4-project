import emptyCart from './nofriesinbasket.jpg'
function EmptyCart() {

    return (
        <div className="emptyCart">
            <div>
                <img className="moonImage" 
                src={emptyCart} alt="no fries in basket yet"/>
            </div>
        </div>
    )
}



export default EmptyCart

