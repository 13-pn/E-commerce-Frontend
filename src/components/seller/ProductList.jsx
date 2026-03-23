import React from "react";

const ProductList = () => {
  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #ffedd5, #fee2e2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1152px", width: "100%" }}>
        {/* Card wrapper */}
        <div
          className="bg-white shadow-lg rounded-3 border border-4 p-4 p-md-5"
          style={{ borderColor: "#b91c1c" }}
        >

          {/* Header */}
          <div className="text-center mb-5">
            <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
              <div style={{ width: "40px", height: "2px", background: "#b91c1c" }}></div>
              <span className="fw-semibold" style={{ color: "#b91c1c" }}>PRODUCT MANAGEMENT</span>
              <div style={{ width: "40px", height: "2px", background: "#b91c1c" }}></div>
            </div>

            <h1 className="fw-bold mb-2" style={{ color: "#991b1b", fontSize: "2rem" }}>
              Your Handcrafted <span style={{ color: "#b91c1c" }}>Products</span>
            </h1>

            <p className="mx-auto" style={{ color: "#b91c1c", maxWidth: "500px" }}>
              Here's an overview of all the products you are currently selling.
            </p>
          </div>

          {/* EMPTY STATE */}
          <div className="text-center py-5 rounded-3 shadow-lg border border-4 mb-4"
               style={{ background: "#ffedd5", borderColor: "#b91c1c" }}>
            <div className="mb-3">
              <div
                className="rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: "80px", height: "80px", background: "#fca5a5" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <p className="mb-3 fw-medium" style={{ color: "#991b1b" }}>
              You haven't added any products yet.
            </p>

            <button className="btn fw-semibold"
                    style={{ backgroundColor: "#b91c1c", color: "#fff" }}>
              Add Your First Product
            </button>
          </div>

          {/* PRODUCT TABLE */}
          <div className="rounded-3 shadow-lg border border-4 overflow-hidden"
               style={{ background: "#ffedd5", borderColor: "#b91c1c" }}>
            <div className="table-responsive">
              <table className="table align-middle mb-0 text-dark">
                <thead style={{ background: "#fecaca", color: "#991b1b" }}>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th className="d-none d-sm-table-cell">Selling Price</th>
                    <th>In Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Product Row */}
                  <tr style={{ borderTop: "2px solid #fecaca", transition: "0.3s" }}
                      className="hover">
                    <td className="d-flex align-items-center gap-3">
                      <div className="border border-2 rounded p-1">
                        <img
                          src="https://via.placeholder.com/60"
                          alt="product"
                          className="rounded"
                          width="60"
                          height="60"
                        />
                      </div>
                      <span className="fw-medium" style={{ color: "#991b1b" }}>Wooden Elephant</span>
                    </td>

                    <td>Wood Craft</td>

                    <td className="d-none d-sm-table-cell fw-semibold" style={{ color: "#b91c1c" }}>
                      ₹500
                    </td>

                    <td>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>

                  {/* Duplicate Row */}
                  <tr style={{ borderTop: "2px solid #fecaca", transition: "0.3s" }}
                      className="hover">
                    <td className="d-flex align-items-center gap-3">
                      <div className="border border-2 rounded p-1">
                        <img
                          src="https://via.placeholder.com/60"
                          alt="product"
                          className="rounded"
                          width="60"
                          height="60"
                        />
                      </div>
                      <span className="fw-medium" style={{ color: "#991b1b" }}>Handmade Pot</span>
                    </td>

                    <td>Pottery</td>

                    <td className="d-none d-sm-table-cell fw-semibold" style={{ color: "#b91c1c" }}>
                      ₹300
                    </td>

                    <td>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductList;