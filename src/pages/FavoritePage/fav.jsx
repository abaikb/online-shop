import React from "react";
import { useFavorite } from "../../FavoriteContext"

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <div>
      <h1>Favorite Items</h1>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
