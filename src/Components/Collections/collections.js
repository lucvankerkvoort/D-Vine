import React from "react";
import CollectionItem from "./collection-item";

const Collection = ({ title }) => {
  return (
    <div className="collection">
      {title.map((title, i) => (
        <CollectionItem key={i} title={title} />
      ))}
    </div>
  );
};

export default Collection;
