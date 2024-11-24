import React from "react";

const AllTasksCard = ({ task }) => {
  const { name, description } = task;
  return (
    <div>
      <div className="card bg-base-100 text-primary-content w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasksCard;
