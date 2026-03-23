import React from "react";

const FilterSidebar = ({ filters, setFilters, onClear }) => {

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, price: e.target.value }));
  };

  const handleSortChange = (e) => {
    setFilters(prev => ({ ...prev, sort: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilters(prev => ({ ...prev, rating: Number(e.target.value) }));
  };

  return (
   <div className="filter-sidebar">

  {/* Header */}
  <div className="filter-header d-flex justify-content-md-between justify-content-center align-items-center gap-2 gap-md-0">
    <h5>Filters</h5>
    <button className="clearBtn" onClick={onClear}>Clear All</button>
  </div>

  {/* Price Range */}
  <div className="filter-section">
    <h6>Price Range</h6>

    <label>
      <input type="radio" name="priceRange" value="under500"
        onChange={handlePriceChange}
        checked={filters.price === "under500"} />
      Under ₹500
    </label>

    <label>
      <input type="radio" name="priceRange" value="500to1000"
        onChange={handlePriceChange}
        checked={filters.price === "500to1000"} />
      ₹500 - ₹1000
    </label>

    <label>
      <input type="radio" name="priceRange" value="above1000"
        onChange={handlePriceChange}
        checked={filters.price === "above1000"} />
      Above ₹1000
    </label>
  </div>

  {/* Sort */}
  <div className="filter-section">
    <h6>Sort by Price</h6>

    <label>
      <input type="radio" name="priceSort" value="lowToHigh"
        onChange={handleSortChange}
        checked={filters.sort === "lowToHigh"} />
      Low to High
    </label>

    <label>
      <input type="radio" name="priceSort" value="highToLow"
        onChange={handleSortChange}
        checked={filters.sort === "highToLow"} />
      High to Low
    </label>
  </div>

  {/* Rating */}
  <div className="filter-section">
    <h6>Rating</h6>

    <label>
      <input type="radio" name="rating" value="4"
        onChange={handleRatingChange}
        checked={filters.rating === 4} />
      4★ & above
    </label>

    <label>
      <input type="radio" name="rating" value="3"
        onChange={handleRatingChange}
        checked={filters.rating === 3} />
      3★ & above
    </label>
  </div>
    <style>{`
      .filter-sidebar {
  width:100%%;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid #eee;
  background: #fff;
  position: sticky;
  top: 0;
  overflow-y: auto;
}

/* Header */
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.filter-header h5 {
  margin: 0;
  font-weight: 600;
}

.filter-header button {
  border: none;
  background: none;
  color: #ff4d4f;
  font-size: 13px;
  cursor: pointer;
}

/* Section */
.filter-section {
  margin-bottom: 25px;
}

.filter-section h6 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Custom radio */
.filter-section label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  margin-bottom: 8px;
  cursor: pointer;
}

/* Radio styling */
.filter-section input[type="radio"] {
  accent-color: black;  /* modern browsers */
  cursor: pointer;
}

/* Hover effect */
.filter-section label:hover {
  color: #ff6a00;
}
  .clearBtn {
  white-space: nowrap;  /* Prevent text from breaking into multiple lines */
 
      `}
    </style>
</div>
  );
};



export default FilterSidebar;