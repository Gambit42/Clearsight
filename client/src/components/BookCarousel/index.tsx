import React, { useState } from "react";
import * as S from "./styles";
import { SwiperSlide } from "swiper/react";
import useFindByGenre from "src/hooks/useFindByGenre";
import { Pagination, Navigation } from "swiper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  title: string;
  data?: any;
  otherProps?: unknown;
  genre: any;
};

const BooksCarousel = (props: Props) => {
  const { title, genre, ...otherProps } = props;
  const [loading, setLoading] = useState(true);
  const { products, isLoading } = useFindByGenre({ genre });
  const [items, setItems] = useState<any[]>([]);

  const array = [
    {
      title: "Gardens of the Moon",
      author: "Steven Erikson",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548497031l/55399._SY475_.jpg",
      isOnSale: true,
      previousPrice: 400,
      price: 200,
    },
    {
      title: "Promise of Blood",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350337505l/15790883.jpg",
      author: "Brian Mclellan",
      isOnSale: false,
      previousPrice: 400,
      price: 192.1,
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K. Rowling",
      image: "https://images-na.ssl-images-amazon.com/images/I/91OINeHnJGL.jpg",
      isOnSale: false,
      previousPrice: 400,
      price: 499.25,
    },
    {
      title: "Storm of Swords",
      author: "George R.R. Martin",
      image: "https://images-na.ssl-images-amazon.com/images/I/91d-77kn-dL.jpg",
      isOnSale: true,
      previousPrice: 900,
      price: 700.25,
    },
    {
      title: "Wisdom of Crowds",
      author: "Joe Abercrombie",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/61241cf5608d5bafd1d58199/The-Wisdom-of-Crowds-book-cover/960x0.jpg?format=jpg&width=960",
      isOnSale: true,
      previousPrice: 700,
      price: 650.25,
    },
    {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkien",
      image:
        "https://fully-booked.ap-south-1.linodeobjects.com/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/9/7/9780544003415.jpg",
      isOnSale: true,
      previousPrice: 100400,
      price: 699.5,
    },
  ];

  // const handleFindByGenre = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await axios.post("http://localhost:4000/product/genre", {
  //       genre: genre,
  //     });

  //     setItems(res.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   handleFindByGenre();
  // }, []);

  console.log(items);

  // if (isLoading) {
  //   return <h1>Loading..</h1>;
  // }

  const books = products.map((item) => (
    <SwiperSlide key={item.title}>
      <S.SliderContent>
        <S.BookDetails>
          <S.BookImage src={item.image} alt="malaz" />
          <S.BookTitleAuthorContainer>
            <S.TitleText>{item.title}</S.TitleText>
            <S.AuthorText>{item.author}</S.AuthorText>
            <S.BookPricesContainer>
              <S.BookNewPrice>₱{item.price.toFixed(2)}</S.BookNewPrice>
              {item.isOnSale ? (
                <S.BookOldPrice>
                  ₱{item.previousPrice?.toFixed(2)}
                </S.BookOldPrice>
              ) : (
                ""
              )}
            </S.BookPricesContainer>
            {item.isOnSale ? <S.SaleText>SALE</S.SaleText> : ""}
          </S.BookTitleAuthorContainer>
        </S.BookDetails>
        <S.AddToCartContainer>
          <S.AddToCartButton variant="cart">
            <S.CartIcon />
            <h1>Add to cart</h1>
          </S.AddToCartButton>
        </S.AddToCartContainer>
      </S.SliderContent>
    </SwiperSlide>
  ));

  const Swiper = isLoading ? (
    <S.StyledSwiper
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 5,
        },
      }}
    >
      {Array(6)
        .fill(null)
        .map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Skeleton className="w-full min-h-[220px]" />
              <Skeleton className="mt-5 w-full" height={20} />
              <Skeleton className="mt-2 w-full" height={20} />
            </div>
          </SwiperSlide>
        ))}
    </S.StyledSwiper>
  ) : (
    <S.StyledSwiper
      loop={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {books}
    </S.StyledSwiper>
  );

  return (
    <S.BookCarouselContainer {...otherProps}>
      <S.SectionTitleContainer>
        <S.SectionTitle>{title}</S.SectionTitle>
        <S.StyledButton variant="primary">See More</S.StyledButton>
      </S.SectionTitleContainer>
      {Swiper}
    </S.BookCarouselContainer>
  );
};

export default BooksCarousel;
