import React, { useState } from "react";
import CourseData from "../../Data/CourseData";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import "./Shop.css";

export default function Shop() {
  const [course, setcourse] = useState(CourseData);
  const [cart, setcart] = useState([]);

  const handleButton = (course) => {
    const newCart = [...cart, course];
    setcart(newCart);
  };

  return (
    <div className="shop">
      <div className="course-container">
        {course.map((course) => (
          <Course course={course} handleButton={handleButton}></Course>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}
