import CollectionItem from "./CollectionItem";
import { COLLECTION_ITEMS } from "../../utils/data";

const CollectionGrid = () => {
  return (
    <div className="container mt-5 md:mt-12">
      <div className="collection-grid flex flex-wrap -mx-1 md:-mx-3">
        {COLLECTION_ITEMS.map((collectionItem, idx) => (
          <CollectionItem key={idx} {...collectionItem} />
        ))}
      </div>
    </div>
  );
};

export default CollectionGrid;
