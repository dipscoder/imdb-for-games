import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
// Components
import { useDispatch } from "react-redux";
import { fetchSearch } from "../actions/gameAction";
// Logo Image
import logo from "../img/logo.svg";

const Nav = () => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
    setTextInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show" >
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form>
        <input
          type="text"
          name="gameName"
          value={textInput}
          onChange={handleInput}
          id="1"
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
