import React, { useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.png';

import { fetchSearch } from '../redux/actions/gamesAction';
import { useDispatch } from 'react-redux';

import { fadeIn } from '../animations';

const Navbar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (textInput.length !== 0) {
      dispatch(fetchSearch(textInput));
    } else {
      dispatch({ type: 'CLEAR_SEARCHED' });
    }
    setTextInput('');
  };

  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };

  return (
    <StyledNavbar variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <h1>Glitch&Grind</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit" onClick={submitHandler}>
          Search
        </button>
      </form>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
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
    width: 50px;
    margin-top: -10px;
  }
`;

export default Navbar;
