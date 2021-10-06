import React, { useState } from "react";
import CourseData from "../../Data/CourseData";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import "./Shop.css";

export default function Shop() {
  const [course, setcourse] = useState(CourseData);

  return (
    <div className="shop">
      <div className="course-container">
        {course.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
}
