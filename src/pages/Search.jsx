import FooterSection from '../components/FooterSection';
import HeaderHome from '../components/HeaderHome';
import { useSearchParams } from 'react-router-dom';
import http from '../helpers/http';
import { Link } from 'react-router-dom';
import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';

import { IoSearch } from 'react-icons/io5';
import { ImLocation } from 'react-icons/im';
import { BsArrowRightSquareFill, BsFilterLeft } from 'react-icons/bs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';

const SearchResults = () => {
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState('');
  const [searchParams, setSeacrhParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [totalPage, setTotalPage] = React.useState();
  const searchValue = searchParams.get('search');

  async function getSearchEvent(search, sortBy, page) {
    if (!search) {
      const { data } = await http().get(`/event?sortBy=${sortBy}&page=${page}`);
      setSearchResults(data.results);
      setTotalPage(data.pageInfo.totalPage);
    } else {
      searchParams.toString('');
      const { data } = await http().get(`/event?sortBy=${sortBy}&page=${page}`);
      setSearchResults(data.results);
      setTotalPage(data.pageInfo.totalPage);
    }
  }
  const limitItem = async (event) => {
    const limit = event.target.value;
    console.log(limit);
    const { data } = await http().get('/event', { params: { limit } });
    setSearchResults(data.results);
  };

  React.useEffect(() => {
    const getEventBySearch = async () => {
      const { data } = await http().get('/event', { params: searchParams });
      setSearchResults(data.results);
    };
    getEventBySearch();
  }, [searchParams]);

  React.useEffect(() => {
    getSearchEvent(searchValue, sortBy, page);

    async function getDataCity() {
      try {
        const { data } = await http().get('/city?limit=10');
        setCities(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getDataCity();
  }, [searchParams, sortBy, searchValue, page]);

  const onSearch = (values) => {
    setSeacrhParams(values, '/Search');
  };

  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="bg-blue-200 flex flex-col  items-center py-[50px]">
        <div className="flex items-center  gap-4 mt-[95px] ">
          <Formik initialValues={{ searchByName: '', searchByLocation: '' }} onSubmit={onSearch}>
            {({ handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="hidden md:block md:flex  bg-white w-[90%] h-[50px] items-center px-[10px] rounded-xl  md:self-start self-center ">
                  <div className="flex gap-2 ">
                    <div>
                      <IoSearch color="#C1C5D0" size={25} />
                    </div>
                    <div>
                      <input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="searchByName"
                        type="text"
                        placeholder="Search event..."
                        className="text-[##C1C5D0] w-full outline-none"
                      />
                    </div>
                  </div>
                  <div className=" border-l-[1px] border-[#C1C5D0] h-[40px] flex items-center  px-[10px]"></div>
                  <div className="flex gap-2">
                    <div>
                      <ImLocation color="#C1C5D0" size={22} />
                    </div>
                    <div>
                      <div className="form-control">
                        <select
                          name="searchByLocation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="outline-none appearance:none -webkit-appearance:none -moz-appearance:none"
                        >
                          <option value="">All Location</option>
                          {cities.map((city) => {
                            return (
                              <option key={`city-name${city.id}`} value={city.name}>
                                {city.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="submit" className="btn btn-accent bg-white outline-none border-0 hover:bg-white">
                      <BsArrowRightSquareFill color="red" size={28} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <div className="flex gap-2">
            <label className="text-black flex items-center gap-2">
              Show{'  '}
              <select onChange={limitItem} className="text-black p-1 rounded-md">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              {'  '}
              entries
            </label>
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1 drop-shadow-lg">
                <BsFilterLeft size={25} className="text-white" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 flex flex-col gap-1"
              >
                <label>Sort By</label>
                <div>
                  <div className="flex  flex-col gap-1">
                    <button
                      onClick={(e) => setSortBy(e.target.value)}
                      value={'ASC'}
                      className="btn btn-active w-[70px] normal-case text-white"
                    >
                      <AiOutlineSortAscending size={20} />
                    </button>
                    <button
                      onClick={(e) => setSortBy(e.target.value)}
                      value={'DESC'}
                      className="btn btn-active w-[70px] normal-case text-white"
                    >
                      <AiOutlineSortDescending size={20} />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
            {searchResults.length > 0 && (
              <div className="bottom-6 w-full flex gap-6 items-center justify-center">
                {page === 1 ? (
                  <button className="btn btn-neutral w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">
                    <FaArrowLeft size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => setPage(page - 1)}
                    className="btn btn-accent w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case"
                  >
                    <FaArrowLeft size={20} />
                  </button>
                )}
                <p className="font-semibold text-accent text-lg">{page}</p>
                {page === totalPage ? (
                  <button className="btn btn-neutral w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">
                    <FaArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => setPage(page + 1)}
                    className="btn btn-accent w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case"
                  >
                    <FaArrowRight size={20} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {searchResults.length > 0 && (
          <div className="text-2xl font-bold mt-8">
            search results for &quot;{searchParams.get('searchByName')}&quot;on events
          </div>
        )}
        <div className="mt-[50px] grid grid-cols-3 gap-y-12 gap-x-16">
          {searchResults.map((event) => {
            return (
              <Link to={`/Event-Detail/${event.id}`} key={`events-detail${event.id}`}>
                <div className="w-64 h-96 min-w-[260px] border rounded-3xl overflow-hidden relative">
                  <img
                    className=" w-full h-full object-cover z-0"
                    src={
                      event.picture.startsWith('https')
                        ? event.picture
                        : `${import.meta.env.VITE_BACKEND_URL}/uploads/${event.picture}`
                    }
                  />
                  <div className="absolute bottom-0  flex flex-col px-5 gap-4 w-full bg-gradient-to-t from-black/[0.5] to-black/[0.0] h-[50%] ">
                    <div className="text-white">{moment(event.date).format('LLLL')}</div>
                    <div className="text-xl text-blue-300 font-bold">{event.tittle}</div>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="flex items-center justify-center text-center">
            {searchResults.length < 1 && (
              <div className="text-2xl font-bold text-red-700">
                Events &quot;{searchParams.get('searchByName')}&quot;Not Found!
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="footers">
        <FooterSection />
      </div>
    </div>
  );
};
export default SearchResults;
