import React from "react";
import Course from "../Course/Course";
import "./Cart.css";

export default function Cart(props) {
  const cart = props.cart;
  console.log(cart);

  const CoursePrice = cart.reduce((sum, course) => sum + course.price, 0);
  const NewCoursePrice = cart.reduce((sum, course) => course.price, 0);
  const tax = CoursePrice / 10;

  return (
    <div>
      <h1> Total item ordered:{cart.length}</h1>
      <h1> Tax:{tax}</h1>
      <h1>Course price:{NewCoursePrice}</h1>

      <h1> Total price is :{CoursePrice + tax}</h1>
      <button className="btn">Place order</button>
    </div>
  );
}
