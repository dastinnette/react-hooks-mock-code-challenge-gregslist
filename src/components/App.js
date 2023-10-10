import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  // pass to ListingCard so we can use it in delete button handler
  const deleteListing = (deletedID) => {
    // always change state to a new copy, never mutate state directly
    const newListings = listings.filter(listingObj => listingObj.id !== deletedID)
    // .filter gives us a new copy
    // change state to new array 
    setListings(newListings)
  }

  const getListings = () => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((listingsArray) => setListings(listingsArray))
  }
  
  // watch youtube on how useEffect works (what does each arg mean and how is it used)
  useEffect(getListings, [])
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer 
        listings={listings}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
