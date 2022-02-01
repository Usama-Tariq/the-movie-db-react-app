import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      navigate(`../search/${values.search}`);
    },
  });

  return (
    <>
      <div className="search-container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="search">Search Movies</label>
          <input
            type="text"
            id="search"
            placeholder="Search Movies"
            name="search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
