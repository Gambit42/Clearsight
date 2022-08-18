import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import qs from "query-string";

type Props = {
  genre: string | undefined;
  limit: number;
};

const useFindByGenre = (props: Props) => {
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { genre, limit } = props;

  const handleFindByGenre = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/product/genre", {
        category: genre,
        limit,
        page: Number(qs.parse(location.search).page),
      });

      setProducts(res.data.data);
      setCount(res.data.count);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFindByGenre();
  }, [genre, location.search]);

  return {
    count,
    products,
    isLoading: loading,
  };
};

export default useFindByGenre;
