import React, { useState } from "react";
import "./ProductPopUp.css";
import "../Cart/YourCart.css";
import burger from "../../../images/HomePageResources/Burger2 1.png";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
   backgroundColor: '',
   border:'none' 
  },
};
Modal.setAppElement("#root");



const ProductPopUp = ({ modalIsOpen, closeModal }) => {

//react-rating-stars-component
  const rating = {
    size: 20,
    value: 5,
    activeColor: "red",
    edit: true,
  };


  const [allData, setAllData] = useState({
    textArea: "",
    dropDown: "",

    checkedButton: [],
  });
  const { textArea } = allData;

  const onTextChange = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };
  console.log(allData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let { checkedButton } = { ...allData };
    checkedButton.push({ name, value });
    console.log(checkedButton);
    // setAllData({ ...allData, checkedButton });
    setAllData({ ...allData, checkedButton });
    console.log({ ...allData });
  };

  // closeModal();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const formData = { ...data, allData };
    console.log(formData);
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-8 mx-auto p-4 popupColor">
              <div className="row mt-0 yourCart">
                <div className="col-4 bg-warning cartImgBorder">
                  <img
                    src={burger}
                    className="img-fluid mx-auto yourCartImg"
                    alt=""
                  />
                </div>
                <div className="col-8 p-3 yourCartBody">
                  <div className="row justify-content-between ml-4">
                    <div className="col-7 text-light">
                      <h4>Big boss Burger</h4>
                    </div>
                    <div className="col-5">
                      <ReactStars {...rating} />
                    </div>
                  </div>
                  <p className="mt-4 ml-5 text-light">$450/piece</p>
                  <div className="row mt-5 justify-content-between ml-5">
                    <div className="col-7">
                      <div className="row text-center">
                        <div className=" col-md-3 border border-secondary text-light">
                          -
                        </div>
                        <div className=" col-md-3 border border-secondary text-light">
                          1
                        </div>
                        <div className=" col-md-3 border border-secondary text-light">
                          +
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <h4 className="text-center text-danger">$129</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* select variation work */}
              <h2 className="text-light">Select Variation</h2>
              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios21"
                    value="+USD 9.00"
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios21"
                  >
                    Large Size (24'')
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light" name="usd1">
                    +USD 7.00
                  </label>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios22"
                    value="+USD 7.00"
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios22"
                  >
                    Medium Size (12'')
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light">+USD 7.00</label>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios23"
                    value="+USD 7.00"
                    onChange={(e) => {
                      setAllData({
                        ...allData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios23"
                  >
                    Small Size (06'')
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light">+USD 7.00</label>
                </div>
              </div>

              {/*You can add extra  */}
              <h2 className="text-light">You can add extra</h2>
              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sdfsd"
                    id="exampleRadios69"
                    value="+USD 7.00"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios69"
                  >
                    Extra salad
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light">+USD 7.00</label>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="Rcdcdde"
                    id="exampleRadios62"
                    //   checked={radio === "+USD 7.00"}

                    value="+USD 7.00"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios62"
                  >
                    Extra onion
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light">+USD 7.00</label>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="form-check col-5 ml-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="examp"
                    id="exampleRadios72"
                    //   checked={radio === "+USD 7.00"}

                    value="+USD 9.00"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label text-light"
                    for="exampleRadios72"
                  >
                    Drink
                  </label>
                </div>
                <div className="col-4 text-right">
                  <label className="text-light">+USD 7.00</label>
                </div>
              </div>
              {/* special instruction text area*/}
              <form>
                <div class="form-group">
                  <h2 for="exampleFormControlTextarea1" className="text-light">
                    Special Instruction
                  </h2>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="write here"
                    rows="3"
                    name="textArea"
                    value={textArea}
                    onChange={(e) => onTextChange(e)}
                  ></textarea>
                </div>
              </form>
              {/* DropDown */}
              {/* <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <h2 className="text-light">If this product is not available</h2>
                <Form.Control
                  as="select"
                  size="sm"
                  custom
                  name="dropDown"
                  onChange={(e) => {
                    setAllData({
                      ...allData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Select one">Select one</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <br /> */}
              <button
                type="submit"
                className="btn btn-success btn-block rounded-pill mt-2 checkoutBtn"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </form>
     </Modal>
  );
};

export default ProductPopUp;