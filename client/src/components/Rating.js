import React from "react";

const Rating = ({ value, text }) => {
  const fullStar = () => {
    return <i className="fas fa-star"></i>;
  };

  const halfStar = () => {
    return <i className="fas fa-star-half-alt"></i>;
  };

  const emptyStar = () => {
    return <i className="far fa-star"></i>;
  };

  const renderRating = () => {
    const rating = [];
    for (let i = 1; i < 6; i++) {
      if (value >= i) rating.push(<span key={i}>{fullStar()}</span>);
      else if (value >= i - 0.5) rating.push(<span key={i}>{halfStar()}</span>);
      else rating.push(<span key={i}>{emptyStar()}</span>);
    }
    return rating;
  };

  return (
    <div className="rating">
      <span>{renderRating()}</span>
      <span>&nbsp;{text && text}</span>
    </div>
  );
};

export default Rating;
