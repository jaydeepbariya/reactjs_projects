import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData as filterFields } from "./data";
import { toast, ToastContainer } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [filterData, setFilterData] = useState(filterFields);

  const [courses, setCourses] = useState({});
  const [loading,setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();

      setCourses(output.data);

    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  useEffect(()=>{
    fetchData(); 
    setLoading(false); 
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto flex-col justify-center items-center bg-bgDark text-white">
      <Navbar />

      <Filter filterData={filterData} />
      {
        (loading)
        ? 
        <ClipLoader 
        color='red'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        :
        <Cards courses={courses} />
      }
     
    </div>
  );
};

export default App;
