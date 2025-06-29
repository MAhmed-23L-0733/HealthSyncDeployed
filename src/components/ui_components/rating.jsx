import React, { useRef, useState } from "react";
import styled from "styled-components";

const Rating = ({ onSendData }) => {
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const star4 = useRef();
  const star5 = useRef();
  const sendDataToParent = () => {
    if (star1.current.checked) {
      onSendData(1);
    } else if (star2.current.checked) {
      onSendData(2);
    } else if (star3.current.checked) {
      onSendData(3);
    } else if (star4.current.checked) {
      onSendData(4);
    } else if (star5.current.checked) {
      onSendData(5);
    }
  };
  return (
    <StyledWrapper>
      <div className="rating">
        <input
          type="radio"
          id="star5"
          name="rate"
          defaultValue={5}
          ref={star5}
          onClick={() => {
            sendDataToParent();
          }}
        />
        <label htmlFor="star5" title="text">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="star-solid"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input
          type="radio"
          id="star4"
          name="rate"
          defaultValue={4}
          ref={star4}
          onClick={() => {
            sendDataToParent();
          }}
        />
        <label htmlFor="star4" title="text">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="star-solid"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input
          defaultChecked
          type="radio"
          id="star3"
          name="rate"
          defaultValue={3}
          ref={star3}
          onClick={() => {
            sendDataToParent();
          }}
        />
        <label htmlFor="star3" title="text">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="star-solid"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input
          type="radio"
          id="star2"
          name="rate"
          defaultValue={2}
          ref={star2}
          onClick={() => {
            sendDataToParent();
          }}
        />
        <label htmlFor="star2" title="text">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="star-solid"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input
          type="radio"
          id="star1"
          name="rate"
          defaultValue={1}
          ref={star1}
          onClick={() => {
            sendDataToParent();
          }}
        />
        <label htmlFor="star1" title="text">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="star-solid"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    fill: #666;
  }

  .rating:not(:checked) > label > svg {
    fill: #666; /* Set default color for SVG */
    transition: fill 0.3s ease; /* Add a transition effect */
  }

  .rating > input:checked + label:hover,
  .rating > input:checked + label:hover ~ label,
  .rating > input:checked ~ label:hover,
  .rating > input:checked ~ label:hover ~ label,
  .rating > label:hover ~ input:checked ~ label {
    fill: #e58e09;
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    fill: #ff9e0b;
  }

  .rating > input:checked ~ label > svg {
    fill: #ffa723; /* Set color for selected stars */
  }
`;

export default Rating;
