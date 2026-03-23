import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useContextpvd } from "../context/context";
import SellerLogin from "./SellerLogin";
import './Seller.css'
import Add_icon from '../../assets/images/add_icon.svg'
import order_icon from '../../assets/images/order_icon.svg'
import productlist_icon from '../../assets/images/product_list_icon.svg'

const buttonsStyle = ({ isActive }) => ({
  backgroundColor: isActive ? '#fecaca' : 'transparent',
});

const Seller = () => {
  const { sellerisLogin, setsellerisLogin } = useContextpvd();

  return (
    <div className="d-flex flex-column min-vh-100" style={{overflow:'hidden'}}>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-3 border-danger bg-light shadow-sm">
        <Link to="/" className="text-decoration-none">
          <h4 className="mb-0 fw-bold text-danger">
            <span className="text-dark">Uttrakhand</span> Handicrafts Seller
          </h4>
        </Link>
        <div className="d-flex align-items-center gap-3">
          <span className="fw-bold d-none d-sm-block">Hi! Admin</span>
          <SellerLogin />
        </div>
      </div>

      <div className="d-flex flex-grow-1">

        {/* Sidebar */}
        <div
          className="bg-light border-end border-3 border-danger  d-flex flex-column align-items-center align-items-md-start w-md-25">
          {/* Responsive width for desktop */}
          <div className="d-md-block w-100">

            <NavLink
              to="/seller"
              end
              className="d-flex flex-column text-center flex-md-row align-items-center mb-2 px-2 py-2 text-decoration-none rounded w-100"
              style={buttonsStyle}
            >
              <img src={Add_icon} alt="icon" className="me-0 me-md-2" />
              <span className="fw-bold text-dark d-md-inline"> Add Product </span>
            </NavLink>

            <NavLink
              to="/seller/product-list"
              className="d-flex flex-column text-center flex-md-row align-items-center mb-2 px-2 py-2 text-decoration-none rounded w-100"
              style={buttonsStyle}
            >
              <img src={productlist_icon} alt="icon" className="me-0 me-md-2" />
              <span className="fw-bold text-dark d-md-inline"> Product List </span>
            </NavLink>

            <NavLink
              to="/seller/orders"
              className="d-flex flex-column text-center flex-md-row align-items-center mb-2 px-2 py-2 text-decoration-none rounded w-100"
              style={buttonsStyle}
            >
              <img src={order_icon} alt="icon" className="me-0 me-md-2" />
              <span className="fw-bold text-dark d-md-inline"> Order </span>
            </NavLink>

          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-3 p-md-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Seller;