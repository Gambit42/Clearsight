import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import qs from "query-string";

type Props = {
  genre: string | undefined;
  limit: number;
};

const useGetProducts = (props: Props) => {
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { genre, limit } = props;

  const handleFindByGenre = async () => {
    setLoading(true);
    const { page, orderWay, orderBy } = qs.parse(location.search);
    try {
      const res = await axios.post("http://localhost:4000/product/get", {
        category: genre,
        limit,
        page: Number(page),
        orderWay: orderWay === "asc" ? 1 : -1,
        orderBy,
      });

      setProducts(res.data.data);
      setCount(res.data.count);
      console.log(res.data.data);
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

export default useGetProducts;
