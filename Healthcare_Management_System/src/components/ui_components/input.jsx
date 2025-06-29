import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
const Input = ({ name, ref, type }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <StyledWrapper>
      <div className="form__group field flex justify-between items-center">
        <input
          type={`${passwordShow ? "text" : type}`}
          className="form__field"
          placeholder="Name"
          required
          ref={ref}
        />
        {type == "password" && (
          <div
            className="text-lg cursor-pointer"
            onClick={() => {
              setPasswordShow(!passwordShow);
            }}
          >
            {!passwordShow && <FaRegEyeSlash></FaRegEyeSlash>}
            {passwordShow && <FaRegEye></FaRegEye>}
          </div>
        )}
        <label htmlFor="name" className="form__label">
          {name}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 200px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 400;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #2274a5;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;

export default Input;
