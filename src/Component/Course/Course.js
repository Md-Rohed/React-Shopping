import React from "react";
import "./Course.css";

export default function Course(props) {
  const { name, instructor, price, image } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="data">
        <h1> Name:{name}</h1>
        <h1>Instructor:{instructor}</h1>
        <h1>Price:{price}</h1>
        <button>Enroll</button>
      </div>
    </div>
  );
}
