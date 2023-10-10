import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  
  const renderListings = listings.map((listing) => {
    console.log(listing)
    return ( 
      <ListingCard 
        deleteListing={deleteListing}
        key={listing.id} 
        listing={listing}
      />
    )
  })
  
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
