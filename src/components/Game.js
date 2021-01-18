import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components and pages
import loadDetail from "../actions/detailAction";


// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Game({game : { name, released, background_image, id }}) {

  const dispatch = useDispatch()
  const fetchDetail = () => {
      dispatch(loadDetail(id))
  }

  return (
    
    <StyledGame onClick={fetchDetail}>
      <Link to={`/game/${id}`}>
        <h3>Game name : {name}</h3>
        <p>Released Date: {released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;