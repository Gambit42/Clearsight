import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  genre: string;
};

const useFindByGenre = (props: Props) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { genre } = props;

  const handleFindByGenre = async () => {
    try {
      const res = await axios.post("http://localhost:4000/product/genre", {
        genre: genre,
      });

      setProducts(res.data.data);
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFindByGenre();
  }, []);

  return {
    products,
    isLoading: loading,
  };
};

export default useFindByGenre;
