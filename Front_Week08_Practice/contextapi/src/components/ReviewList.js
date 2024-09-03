import React from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import dummy from "../dummy/dummy.json";

const ReviewList = () => {
  return (
    <List>
      {dummy.data.map((review) => (
        <ReviewItem
          img={review.img}
          title={review.title}
          comment={review.comment}
        />
      ))}
    </List>
  );
};

export default ReviewList;

const List = styled.div`
  margin-top: 30px;
`;
