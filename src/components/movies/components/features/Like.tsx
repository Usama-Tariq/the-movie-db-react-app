import React from "react";

interface props {
  isLiked: boolean;
  handleLike: () => void;
}

const Like = (props: props) => {
  let classes = props.isLiked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      onClick={props.handleLike}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
