import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  genre: string | undefined;
  limit: number;
  skip?: number;
};

const useFindByGenre = (props: Props) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { genre, limit, skip } = props;

  const handleFindByGenre = async () => {
    try {
      const res = await axios.post("http://localhost:4000/product/genre", {
        category: genre,
        limit,
        skip,
      });

      setProducts(res.data.data);
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFindByGenre();
  }, [genre]);

  return {
    products,
    isLoading: loading,
  };
};

export default useFindByGenre;
