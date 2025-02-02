import React from 'react'
import './Ordernow.css'

const Ordernow = () => {
            {/*Order Now section start */}
    return (

        <div>
            <div className="item-flex">

                <section className="checkout">
                    <h2 className="section-heading">Payment Details</h2>

                    <div className="payment-form">
                        <div className="payment-method">
                            <button className="method selected">
                                <ion-icon name="card"></ion-icon>

                                <span>Credit Card</span>

                                <ion-icon name="checkmark-circle" className="checkmark fill"></ion-icon>
                            </button>

                            <button className="method">
                                <ion-icon name="logo-paypal"></ion-icon>

                                <span>PayPal</span>

                                <ion-icon name="checkmark-circle-outline" className="checkmark"></ion-icon>
                            </button>
                        </div>

                        <form action="#">

                            <div className="cardholder-name">
                                <label for="cardholder-name" className="label-default">Cardholder Name</label>
                                <input type="text" id="cardholder-name" className="input-default" name="cardholder-name" />
                            </div>

                            <div className="card-number">
                                <label for="card-number" className="label-default">Card Number</label>
                                <input type="number" id="card-number" className="input-default" name="card-number" />
                            </div>

                            <div className="input-flex">
                                <div className="expire-date">
                                    <label for="expire-date" className="label-default">Expiration Date</label>

                                    <div className="input-flex">
                                        <input type="number" name="day" id="expire-date" className="input-default" placeholder="31" min="1" max="31" />
                                        /
                                        <input type="number" name="month" id="expire-date" className="input-default" placeholder="12" min="1" max="12" />
                                    </div>
                                </div>

                                <div className="cvv">
                                    <label for="cvv" className="label-default">CVV</label>
                                    <input type="number" id="cvv" className="input-default" name="cvv" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="btn-wrapper">
                        <button className="btn btn-primary"><b>Pay</b> $ <span id="payAmount">2.15</span></button>
                    </div>
                </section>

                <section className="cart">
                    <div className="cart-item-box">
                        <h2 className="section-heading">Order Summary</h2>

                        <div className="product-card">

                            <div className="card">
                                <div className="img-box">
                                    <img src="https://i.postimg.cc/fRQrxtvL/shirt2.png" alt="green-tomatoes" width="80px" className="product-img" />
                                </div>

                                <div className="detail">

                                    <h4 className="product-name">Stylish Shirt</h4>

                                    <div className="wrapper">

                                        <div className="product-qty">
                                            <button id="decrement">
                                                <ion-icon name="remove-outline"></ion-icon>
                                            </button>

                                            <span id="quantity">1</span>

                                            <button id="increment">
                                                <ion-icon name="add-outline"></ion-icon>
                                            </button>
                                        </div>

                                        <div className="price">
                                            <span id="price">1.25</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="product-close-btn">
                                    <ion-icon name="close-outline"></ion-icon>
                                </button>
                            </div>
                        </div>


                    </div>

                    <div className="wrapper">
                        <div className="discount-token">
                            <label for="discount-token" className="label-default">Gift Card/Discount Code</label>

                            <div className="wrapper-flex">
                                <input type="text" name="discount-token" id="discount-token" className="input-default" />

                                <button className="btn btn-outline">Apply</button>
                            </div>
                        </div>

                        <div className="amount">
                            <div className="subtotal">
                                <span>Subtotal</span> <span>$ <span id="subtotal">2.05</span></span>
                            </div>

                            <div className="tax">
                                <span>Tax</span> <span>$ <span id="tax">0.10</span></span>
                            </div>

                            <div className="shipping">
                                <span>Shipping</span> <span>$ <span id="shipping">0.00</span></span>
                            </div>

                            <div className="total">
                                <span>Total</span> <span>$ <span id="total">2.15</span></span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Ordernow