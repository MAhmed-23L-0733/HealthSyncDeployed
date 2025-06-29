import styled from "styled-components";

const Switch = ({ switchBtn, setSwitchBtn }) => {
  return (
    <StyledWrapper>
      <div className="mx-3 flex">
        <input
          type="checkbox"
          id="checkbox"
          checked={switchBtn}
          onChange={() => {
            setSwitchBtn(!switchBtn);
          }}
        />
        <label htmlFor="checkbox" className="toggle h-10 w-8 gap-2">
          <div className="bars" id="bar1" />
          <div className="bars" id="bar2" />
          <div className="bars" id="bar3" />
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
  }

  .bars {
    width: 110%;
    height: 2px;
    background-color: black;
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`;

export default Switch;
