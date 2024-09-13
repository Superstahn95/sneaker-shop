export const categories = [
  "all",
  "puma",
  "addidas",
  "nike",
  "zara",
  "new balance",
];

type ImageMap = {
  [key: string]: any; // Replace `any` with the specific type if known, e.g., `ImageSourcePropType`
};
export const products = [
  {
    _id: "1",
    image: "sneakers2.png",
    gender: "Men",
    price: 500,
    name: "Adidas Adistar Cushion",
    description:
      "The Adidas Adistar Cushion is a high-performance running shoe designed to provide maximum comfort and support for long-distance runners",
  },
  {
    _id: "2",
    image: "sneakers3.png",
    gender: "Unisex",
    price: 300,
    name: "Nike air force",
    description:
      "The Adidas Adistar Cushion is a high-performance running shoe designed to provide maximum comfort and support for long-distance runners",
  },
  {
    _id: "3",
    image: "sneakers4.png",
    gender: "Men",
    price: 700,
    name: "New balance 9060",
    description:
      "The Adidas Adistar Cushion is a high-performance running shoe designed to provide maximum comfort and support for long-distance runners",
  },
  {
    _id: "4",
    image: "sneakers5.png",
    gender: "Men",
    price: 500,
    name: "New balance 9060",
    description:
      "The Adidas Adistar Cushion is a high-performance running shoe designed to provide maximum comfort and support for long-distance runners",
  },
  {
    _id: "5",
    image: "sneakers6.png",
    gender: "Men",
    price: 500,
    name: "Adidas Adistar Cushion",
    description:
      "The Adidas Adistar Cushion is a high-performance running shoe designed to provide maximum comfort and support for long-distance runners",
  },
];

export const imageMap: ImageMap = {
  "sneakers2.png": require("@/assets/images/sneakers2.png"),
  "sneakers3.png": require("@/assets/images/sneakers3.png"),
  "sneakers4.png": require("@/assets/images/sneakers4.png"),
  "sneakers5.png": require("@/assets/images/sneakers5.png"),
  "sneakers6.png": require("@/assets/images/sneakers6.png"),
};

export const discountItems = [
  {
    _id: "1",
    image: "@/assets/images/sneakers5.png",
    percentageDiscount: 50,
  },
  {
    _id: "2",
    image: "@/assets/images/sneakers4.png",
    percentageDiscount: 40,
  },
  {
    _id: "3",
    image: "@/assets/images/sneakers6.png",
    percentageDiscount: 70,
  },
];
