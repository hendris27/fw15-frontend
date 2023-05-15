import FooterSection from "../components/FooterSection";
import HeaderHome from "../components/HeaderHome";
import { useSearchParams } from "react-router-dom";
import http from "../helpers/http";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";
import { Formik } from "formik";

import { IoSearch } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { BsArrowRightSquareFill } from "react-icons/bs";

// import { useNavigate } from "react-router-dom";

const SearchResults = () => {
  // const navigate = useNavigate();

  const [searchParams, setSeacrhParams] = useSearchParams();
  const [searchResults, setSearchResults] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    const getEventBySearch = async () => {
      const { data } = await http().get("/event", { params: searchParams });
      setSearchResults(data.results);
    };
    getEventBySearch();
  }, [searchParams]);

  React.useEffect(() => {
    async function getDataCity() {
      try {
        const { data } = await http().get("/city?limit=100");
        setCities(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getDataCity();
  }, []);

  const onSearch = (values) => {
    // const qs = new URLSearchParams(values).toString();
    // navigate(`/Search?${qs}`);
    setSeacrhParams(values, "/Search");
  };
  return (
    <div className="h-screen">
      <nav className="headers">
        <HeaderHome />
      </nav>
      <main className="bg-blue-200 flex flex-col  items-center py-[50px]">
        <div className="flex flex-col justify-center self-center gap-4 mt-[95px] ">
          <Formik
            initialValues={{ searchByName: "", searchByLocation: "" }}
            onSubmit={onSearch}
          >
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
                              <option
                                key={`city-name${city.id}`}
                                value={city.name}
                              >
                                {city.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="btn btn-primary bg-white outline-none border-0 hover:bg-white"
                    >
                      <BsArrowRightSquareFill color="red" size={28} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
        {searchResults.length > 0 && (
          <div className="text-2xl font-bold">
            Result of &quot;{searchParams.get("searchByName")}&quot;
          </div>
        )}
        <div className="mt-[50px] flex w-[95%]  overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4 justify-center">
          {searchResults.map((event) => {
            return (
              <Link
                to={`/Event-Detail/${event.id}`}
                key={`events-detail${event.id}`}
              >
                <>
                  <div className="w-64 h-96 min-w-[260px] border rounded-3xl overflow-hidden relative">
                    <img
                      className=" w-full h-full object-cover z-0"
                      src={`http://localhost:8888/uploads/${event.picture}`}
                    />
                    <div className="absolute bottom-0  flex flex-col px-5 gap-4 w-full bg-gradient-to-t from-black/[0.5] to-black/[0.0] h-[50%] ">
                      <div className="text-white">
                        {moment(event.date).format("LLLL")}
                      </div>
                      <div className="text-xl text-blue-300 font-bold">
                        {event.tittle}
                      </div>
                    </div>
                  </div>
                </>
              </Link>
            );
          })}
          {searchResults.length < 1 && (
            <div className="text-2xl font-bold text-red-700">
              Events &quot;{searchParams.get("searchByName")}&quot;Not Found!
            </div>
          )}
        </div>
      </main>

      <div className="footers">
        <FooterSection />
      </div>
    </div>
  );
};
export default SearchResults;
