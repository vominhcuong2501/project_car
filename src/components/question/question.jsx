import React from "react";
import "./question.scss";

export default function Question() {
  return (
    <div>
      <div className="question">
        <div className="card">
          <div className="card-body p-0">
            <h4 className="card-title">Questions</h4>
            <h4 className="card-title">about</h4>
            <h4 className="card-title">buying or </h4>
            <h4 className="card-title">renting?</h4>
            <button className="btn">Ask Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
