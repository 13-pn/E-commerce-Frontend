import React from "react";

const AddProduct = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fff7ed, #fee2e2)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="container px-3 px-md-0">
        <div
          className="mx-auto p-4 p-md-5 shadow-lg"
          style={{
            maxWidth: "900px",
            background: "#fff",
            borderRadius: "24px",
            border: "4px solid #b91c1c",
          }}
        >
          <h2
            className="text-md-center fw-bold mb-5"
            style={{ fontSize: "2.2rem", color: "#991b1b" }}
          >
            List Your <span style={{ color: "#ea580c" }}>Handicraft</span>
          </h2>

          <form className="row g-4">

            {/* Images */}
            <div className="col-12">
              <label className="fw-semibold mb-3" style={{ fontSize: "1.1rem", color: "#991b1b" }}>
                Product Images (up to 4)
              </label>
              <div className="row g-3">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="col-6 col-sm-3">
                    <label
                      className="d-flex flex-column align-items-center justify-content-center"
                      style={{
                        width: "100%",
                        height: "120px",
                        border: "2px dashed #fca5a5",
                        borderRadius: "12px",
                        background: "#fef2f2",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      <input type="file" className="d-none" />
                      <i className="bi bi-image" style={{ fontSize: "28px", color: "#f87171" }}></i>
                      <small style={{ color: "#f87171" }}>Upload Image</small>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Name */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Product Name *
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Hand-carved Wooden Elephant"
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              />
            </div>

            {/* Category */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Category *
              </label>
              <select
                className="form-select"
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              >
                <option>Select Category</option>
                <option>Wood Craft</option>
                <option>Pottery</option>
                <option>Textile</option>
              </select>
            </div>

            {/* Description */}
            <div className="col-12">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Product Description *
              </label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Write product description..."
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              ></textarea>
            </div>

            {/* Price */}
            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Original Price *
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="₹0"
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="fw-semibold mb-1" style={{ color: "#991b1b" }}>
                Offer Price
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="₹0"
                style={{
                  borderRadius: "12px",
                  padding: "10px",
                  border: "2px solid #fca5a5",
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button
                className="w-100 fw-bold"
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  border: "none",
                  color: "#fff",
                  fontSize: "18px",
                  background: "linear-gradient(to right, #b91c1c, #ea580c)",
                  transition: "0.3s",
                }}
              >
                <i className="bi bi-plus-circle me-2"></i>
                ADD PRODUCT
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;