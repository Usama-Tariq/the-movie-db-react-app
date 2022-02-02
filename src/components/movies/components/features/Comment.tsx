import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "../../styles/movies.css";

const initialValues = {
  name: "",
  comment: "",
};

let validationSchema = yup.object().shape({
  name: yup.string().required("Required").min(3, "Atleast 3 character long"),
  comment: yup.string().required("Required").min(3, "Atleast 3 character long"),
});

function Comment(props: any) {
  const formik = useFormik({
    initialValues,
    onSubmit: props.handleComment,
    validationSchema,
  });

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-4">
              <label>Name</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className="valitadition-text">
                <h6>{formik.errors.name ? formik.errors.name : null}</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label>Comment</label>
            </div>
            <div className="col-6">
              <textarea
                id="comment"
                name="comment"
                placeholder="Your comment.."
                onChange={formik.handleChange}
                value={formik.values.comment}
              ></textarea>
              <div className="valitadition-text">
                <h6>{formik.errors.comment ? formik.errors.comment : null}</h6>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4"></div>
            <div className="col-6">
              <button type="submit" disabled={!formik.isValid}>
                Submit
              </button>
            </div>
            <br />
            <br />
            <div className="row"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Comment;
