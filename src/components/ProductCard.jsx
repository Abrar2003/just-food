import React from "react";

function ProductCard() {
  const mainColor = "#F56565";
  return (
    <div
      className="card ml-5 mt-5"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is some TEXT</p>
        <div className="container">
          <select
            className="p-1 rounded mr-3"
            style={{ backgroundColor: mainColor }}
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            className="p-1 rounded m-2"
            style={{ backgroundColor: mainColor }}
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <div className="h-100 fs-5 d-inline">Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
