import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonateToy, onUpdateToy }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDonateToy={onDonateToy}
      onUpdateToy={onUpdateToy}
    />
  ));

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
