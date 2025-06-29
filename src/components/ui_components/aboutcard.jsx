import React from "react";
import styled from "styled-components";

const AboutCard = ({ pfp, name, post, about }) => {
  return (
    <StyledWrapper>
      <div className="card h-65 w-50 lg:h-85 lg:w-70 border-gray-400 border-2">
        <div className="card-front grid place-content-center space-y-3 lg:mb-10">
          <img
            src={pfp}
            alt=""
            className="rounded-full h-35 w-35 lg:h-45 lg:w-45"
          />
          <p className="font-bold pb-1 border-b-black border-b-2 text-lg">
            {name}
          </p>
          <p className="text-sm">{post}</p>
        </div>
        <div className="card-back">
          <p>{about}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    color: #1b1b1b;
    position: relative;
    border-radius: 8px;
    line-height: 150%;
    padding: 16px;
    background: #ff930f;
    background-blend-mode: multiply;
    background: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);
    transition: background-color 1s ease-in-out;
    overflow: hidden;
  }

  .card-front {
    bottom: 16px;
    left: 0;
    position: absolute;
    width: 100%;
    text-align: center;
    transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  .card-back {
    transform: translateX(120%);
    transition: transform 1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }

  /*Text*/
  .title {
    font-size: 1.3rem;
    font-weight: bold;
  }
  /*Text divider*/
  .title::after {
    content: "";
    display: block;
    width: 50%;
    border-radius: 50%;
    height: 2px;
    margin: 2px auto;
    background-color: #1b1b1b;
  }

  /*Hover*/
  .card:hover {
    background-color: #1b1b1b25;
  }

  .card:hover .card-front {
    transform: translateX(-100%);
  }

  .card:hover .card-back {
    transform: translateX(0);
  }
`;

export default AboutCard;
