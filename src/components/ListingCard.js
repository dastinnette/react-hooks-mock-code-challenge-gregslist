import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const { description, image, location } = listing;

  function handleFavoriteClick() {
    setIsFavorite((isFavorite) => !isFavorite)
  }

  const handleDelete = () => {
    deleteListing(listing.id)
    fetch(`http://localhost:6001/listings/${listing.id}`, { method: "DELETE" })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
