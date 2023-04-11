import React from "react";
import Card from "./Card";

const Tours = ({tours, removeTour}) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plans With Anagha</h2>
      </div>
      <div className="cards">
        {
            tours.map((tour) => {
          return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>
        })
        }
      </div>
    </div>
  );
}
// note : whenever you are using map function is used in component always pass key %% key={tour.id} %%
export default Tours;
