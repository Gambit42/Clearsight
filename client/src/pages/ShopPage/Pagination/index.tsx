import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import qs from "query-string";

interface Props {
  count: number;
  limit: number;
  genre: string;
  sorter: string;
}
const Pagination = (props: Props) => {
  const { count, limit, genre, sorter } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = qs.parse(location.search);
  const queryPage = Number(queryParams.page) - 1;
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    if (queryParams.page) {
      return setCurrentPage(queryPage);
    }
    setCurrentPage(0);
    console.log("thisFires");
  }, [genre, sorter]); // when the categoryInput changes, the pagination will be reset back to 0

  console.log(currentPage);

  return (
    <div className="pb-20">
      <ReactPaginate
        forcePage={currentPage}
        pageCount={Math.ceil(count / limit)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        onPageChange={(data) => {
          const queryParams = qs.parse(location.search);
          const newQueries = { ...queryParams, page: data.selected + 1 };
          setCurrentPage(data.selected);
          navigate({
            pathname: location.pathname,
            search: qs.stringify(newQueries),
          });
          window.scrollTo(0, 0);
        }}
        activeClassName="bg-red-700 text-white"
        pageClassName="border-y border-r border-gray-400 py-2 px-4 h-10"
        breakClassName="border-y border-r border-gray-400 py-2 px-4  h-10"
        className="outline-none mx-auto flex flex-row mt-5 max-w-sm h-10 items-center justify-center font-roboto"
        previousClassName="rounded-tl-lg rounded-bl-lg border border-gray-400 lowercase px-4 py-2 h-10 flex items-center"
        nextClassName="rounded-tr-lg rounded-br-lg border-y border-r border-gray-400 lowercase px-4 py-2 h-10 flex items-center"
        previousLabel={<MdNavigateBefore className="w-6 h-6 text-gray-900" />}
        nextLabel={<MdNavigateNext className="w-6 h-6 text-gray-900" />}
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};

export default Pagination;
