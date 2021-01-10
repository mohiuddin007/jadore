import React from 'react';

const Cart = () => {
    return (
        <div className="deliveryCart mt-5 p-3">
            <div className="row pt-4">
                <div className="col-7"><h6>Subtotal</h6></div>
                <div className="col-5"><h6 className="text-danger">$120</h6> </div>
            </div>
            <div className="row pt-4">
                <div className="col-7"><h6>Tax</h6></div>
                <div className="col-5"><h6 className="text-danger">$12</h6> </div>
            </div>
            <div className="mx-auto" style={{ border: "1px solid #FFFFFF", width: '80%' }}></div>
            <div className="row mt-3">
                <div className="col-7"><h4>Total</h4></div>
                <div className="col-5"><h4 className="text-danger">$132</h4> </div>
            </div>
            <button className="btn btn-success btn-block rounded-pill mt-2 checkoutBtn">Checkout</button>
        </div>
    );
};

export default Cart;