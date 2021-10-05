import React from "react";

export default function Course(props) {
  const { name, instructor, price, image } = props.course;
  return (
    <div>
      <img src={image} alt="" />
      <h1> Name:{name}</h1>
      <h1>Instructor:{instructor}</h1>
      <h1>Price:{price}</h1>
    </div>
  );
}
