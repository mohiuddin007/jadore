import React from 'react';
import './ProductPopUp.css';
import '../Cart/YourCart.css';
import burger from '../../../images/HomePageResources/Burger2 1.png';
import ReactStars from "react-rating-stars-component";
import { Form } from 'react-bootstrap';

const ProductPopUp = () => {
    const rating = {
        size: 20,
        value: 5,
        activeColor: "red",
        edit: true
    };
    return (
        <form >
            <div className='container' style={{backgroundColor:'#434343'}}>
            <div className="row pb-5">
                    <div className="col-md-8">
                        <div className="row mt-3 yourCart">
                            <div className="col-4 bg-warning cartImgBorder">
                                <img src={burger} className="img-fluid mx-auto yourCartImg" alt="" />
                            </div>
                            <div className="col-8 p-3 yourCartBody">
                                <div className="row justify-content-between ml-4">
                                    <div className="col-7 text-light"><h4>Big boss Burger</h4></div>
                                    <div className="col-5"><ReactStars {...rating} /></div>
                                </div>
                                <p className="mt-4 ml-5 text-light">$450/piece</p>
                                <div className="row mt-5 justify-content-between ml-5">
                                    <div className="col-7">
                                        <div className="row text-center">
                                            <div className="col-md-3 border border-secondary text-light">-</div>
                                            <div className="col-md-3 border border-secondary text-light">1</div>
                                            <div className="col-md-3 border border-secondary text-light" >+</div>
                                        </div>

                                    </div>
                                    <div className="col-5"><h4 className="text-center text-danger">$129</h4></div>
                                </div>

                            </div>
                        </div>
                        <br/>
                    {/* select variation work */}
                    <h2 className="text-light">Select Variation</h2>
                    <br/>
                    <div className="row justify-content-between">
                        
                        
                       
                        <div className="form-check col-5">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                            <label className="form-check-label text-light" for="exampleRadios2">
                             Large Size (24'')
                            </label>
                          
                        </div>
                        <div className="col-4 text-right">
                            <label className="text-light">+USD 7.00</label>
                        </div>
                        
                    </div>
                    <br/>

                    <div className="row justify-content-between">
                        
                        
                        
                        <div className="form-check col-5">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                            <label className="form-check-label text-light" for="exampleRadios2">
                             Medium Size (12'')
                            </label>
                          
                        </div>
                        <div className="col-4 text-right">
                            <label className="text-light">+USD 7.00</label>
                        </div>
                    </div>
                    {/* abar add korbo */}
                    <br/>

<div className="row justify-content-between">
    
    
    
    <div className="form-check col-5">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label className="form-check-label text-light" for="exampleRadios2">
         Large Size (06'')
        </label>
      
    </div>
    <div className="col-4 text-right">
        <label className="text-light">+USD 7.00</label>
    </div>
   
</div>
<br/>

{/*You can add extra  */}
<h2 className="text-light">You can add extra</h2>
<br/>
<div className="row justify-content-between">
    
    

    <div className="form-check col-5">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label className="form-check-label text-light" for="exampleRadios2">
         Extra salad
        </label>
      
    </div>
    <div className="col-4 text-right"> 
        <label className="text-light">+USD 7.00</label>
    </div>
    
</div>
<br/>

<div className="row justify-content-between">
    
    
   
    <div className="form-check col-5">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label className="form-check-label text-light" for="exampleRadios2">
         Extra onion
        </label>
      
    </div>
    <div className="col-4 text-right">
        <label className="text-light">+USD 7.00</label>
    </div>
    
</div>
<br/>

<div className="row justify-content-between">
    
    
    
    <div className="form-check col-5">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
        <label className="form-check-label text-light" for="exampleRadios2">
         Drink
        </label>
      
    </div>
    <div  className="col-4 text-right">
        <label className="text-light">+USD 7.00</label>
    </div>
    
</div>
<br/>
{/* special instruction */}
<form>
    <div class="form-group">
        <h2 for="exampleFormControlTextarea1" className="text-light">Special Instruction</h2>
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="write here" rows="3"></textarea>
    </div>
</form>
<br/>
<Form>
<Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <h2 className="text-light">If this product is not available</h2>
    <Form.Control as="select" size="sm" custom>
      <option>Select one</option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
    </Form.Control>
  </Form.Group>
</Form>
<br/>
<button className="btn btn-success btn-block rounded-pill mt-2 checkoutBtn">Add to cart</button>

                    </div>
               

                    </div>
                 
                   
                </div>

                
                    
                {/* </div> */}
                
                
        </form>
    );
};

export default ProductPopUp;