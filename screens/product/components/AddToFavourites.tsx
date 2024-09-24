import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToFavourites } from "../../../features/favourite/favouriteSlice";
import { FavouriteType } from "../../../features/favourite/favouriteSlice";

export default function AddToFavourites(faveDetails: FavouriteType) {
  const dispatch = useAppDispatch();
  const handleAddToFavourites = () => {
    dispatch(addToFavourites(faveDetails));
  };
  return (
    <Button
      onPress={handleAddToFavourites}
      title="Favourite"
      optionalTextColor="#696969"
    />
  );
}

const styles = StyleSheet.create({});
