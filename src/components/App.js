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

  const [search, setSearch] = useState("");

  // every time we submit the search form, our state variable gets changed
  // by the "setSearch" function
  const updateSearch = (newValue) => setSearch(newValue.toLowerCase());

  // every time the state variable changes, we get a re-render and this
  // variable get reassigned
  const filteredListings = listings.filter((listingObj) => {
    // console.log(listingObj.description)
    // console.log(search)
    if (listingObj.description.toLowerCase().includes(search)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="app">
      <Header updateSearch={updateSearch}/>
      <ListingsContainer 
        listings={filteredListings}
        deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
