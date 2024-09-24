import { StyleSheet, Text, View } from "react-native";
import { removeFromFavourites } from "../../../features/favourite/favouriteSlice";
import { useAppDispatch } from "../../../hooks/redux";
import Button from "../../../components/button/Button";
interface RemoveFromFavouritesProps {
  _id: string;
}

export default function RemoveFromFavourites({
  _id,
}: RemoveFromFavouritesProps) {
  const dispatch = useAppDispatch();
  const handleItemRemoval = () => {
    dispatch(removeFromFavourites(_id));
  };
  return (
    <Button
      onPress={handleItemRemoval}
      title="Remove From Favourites"
      optionalTextColor="#696969"
    />
  );
}

const styles = StyleSheet.create({});
