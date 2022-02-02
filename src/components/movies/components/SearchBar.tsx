import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import "../styles/movies.css";

let validationSchema = yup.object().shape({
  search: yup.string().required("Required").min(4, "Atleast 4 character long"),
});

function SearchBar() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      navigate(`../search/${values.search}`);
    },
    validationSchema,
  });

  return (
    <>
      <div className="search-container">
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id="search"
            placeholder="Search Movies"
            name="search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <div className="valitadition-text">
            <h6>{formik.errors.search ? formik.errors.search : null}</h6>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
