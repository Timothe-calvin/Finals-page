//  https://fakestoreapi.com/products


export const getProductsList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

