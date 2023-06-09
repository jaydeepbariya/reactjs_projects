import React from "react";
import './Item.css';

const Item = () => {
  const response = [
    {
      name: "Nirma",
      date: "05",
      month: "April",
      year: "2000",
    },
    {
      name: "Divya",
      date: "03",
      month: "June",
      year: "2001",
    },
    {
      name: "Geeta",
      date: "04",
      month: "May",
      year: "2002",
    },
  ];

  return (
    <div className="main">
      <h1>Item</h1>

      {response.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>{item.month}</td>
            <td>{item.year}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Item;
