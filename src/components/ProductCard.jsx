import React from "react";

function ProductCard() {
  const mainColor = "#F56565";
  return (
    <div
      className="card ml-5 mt-5"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img className="card-img-top" src="https://content.jdmagicbox.com/comp/darjeeling/h1/9999px354.x354.181016125224.y3h1/catalogue/random-fast-food-pedong-darjeeling-fast-food-b66reu0l8c.jpg" alt="Card image cap" />
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
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="h-100 fs-5 d-inline">Total Price</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
