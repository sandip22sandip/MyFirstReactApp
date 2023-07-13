import React from "react";
import { Link } from "react-router-dom";

import noimage from "../assets/images/course-imgs/noimage.png";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, resetCart} from "../redux/cartSlice";

function AddToCart() {
  const userId = useSelector((state) => state.user.currentUser.idst);
  const products = useSelector((state) => (state.cart[userId] ? state.cart[userId] : []));
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * Number(item.pro_coins);
    });
    return total;
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct({ userId, productId }));
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== Content ===========================*/}
          <ul className="breadcrumb p-0">
            <li className="breadcrumb-item">
              <Link to="/rewards">Rewards Store</Link>
            </li>
            <li className="breadcrumb-item active">Shopping Cart</li>
          </ul>
          <div id="shopping-cart">
            <button
              className="btn btn-default btn-rounded btn-sm pull-right m-b-15"
              onClick={() => dispatch(resetCart({ userId }))}
            >
              Empty Cart
            </button>
            <Link
              to="/rewards"
              className="btn btn-success btn-rounded btn-sm pull-right m-b-15 m-r-5"
            >
              Continue Shopping
            </Link>
            <form>
              {products.length !== 0 && totalPrice() !== 0 && (
                <Link to="/pay">
                  <button
                    type="button"
                    id="btnPlaceOrder"
                    className="btn btn-primary btn-rounded btn-sm pull-right m-b-15 m-r-5"
                  >
                    Checkout
                  </button>
                </Link>
              )}
            </form>
            <table className="tbl-cart" cellSpacing={1} cellPadding={10}>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Name</th>
                  <th style={{ textAlign: "right" }} width="5%">
                    Quantity
                  </th>
                  <th style={{ textAlign: "right" }} width="15%">
                    Unit Coin
                  </th>
                  <th style={{ textAlign: "right" }} width="15%">
                    Coin
                  </th>
                  <th style={{ textAlign: "center" }} width="5%">
                    Remove
                  </th>
                </tr>
                {products.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <img src={noimage} className="cart-item-image" alt="" />
                      {product?.pro_name}
                    </td>
                    <td style={{ textAlign: "right" }}>{product.quantity}</td>
                    <td style={{ textAlign: "right" }}>
                      C {product.pro_coins}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      C {product.quantity * Number(product.pro_coins)}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        className="btnRemoveAction"
                        onClick={() => handleRemove(product.id)}
                      >
                        <i
                          className="text-danger fa fa-trash"
                          aria-hidden="true"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={1} align="right">
                    Total:
                  </td>
                  <td colSpan={3} align="right">
                    <strong>C {totalPrice()}</strong>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
