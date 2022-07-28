import CollectionItem from "./CollectionItem";

const CollectionGrid = ({ collectionItems = [] }) => {
  return (
    <div className="container mt-5 md:mt-12">
      <div className="collection-grid flex flex-wrap -mx-1 md:-mx-3">
        {collectionItems.map((collectionItem, idx) => (
          <CollectionItem key={idx} {...collectionItem} />
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
