import React from "react";
import "./styles.css";

function TableData(props) {
  const { product, unit, price } = props.data;

  return (
    <tr>
      <td>{product}</td>
      <td>{unit}</td>
      <td>{price}</td>
    </tr>
  );
}

export default function App() {
  const data = [
    {
      product: "Three Unicorns",
      unit: 1,
      price: "$15.00"
    },
    {
      product: "Awesome Jacks",
      unit: 2,
      price: "$45.00"
    },
    {
      product: "Two Kings",
      unit: 1,
      price: "$20.00"
    }
  ];

  return (
    <div className="container">
      <h3>Invoice</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <TableData data={el} key={el.product} />
          ))}
        </tbody>
      </table>
      <div className="total">
        <span>Total</span>
        <span>$60.00</span>
      </div>
      <button className="btn">Pay Now</button>
    </div>
  );
}
