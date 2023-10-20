import { useState, useEffect } from "react";
import { ProductProps } from "@/app/components/Products";

interface FetchProductsResult {
  products: ProductProps[] | null;
  error: Error | null;
  loading: boolean;
}

const useFetchProducts = ( url : string): FetchProductsResult => {
  const [products, setProducts] = useState<ProductProps[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const productsArray: ProductProps[] = data.products;
        setProducts(productsArray);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, error, loading };
};

export default useFetchProducts;
