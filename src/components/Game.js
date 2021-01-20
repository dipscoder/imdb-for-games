import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Components and pages
import loadDetail from "../actions/detailAction";
import { smallImage } from "../util";


// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Game({game : { name, released, background_image, id }}) {

  const stringPathId = id.toString()
  // console.log(id);
  const dispatch = useDispatch()
  const fetchDetail = () => {
      document.body.style.overflow = "hidden";
      dispatch(loadDetail(id))
  }

  return (
    <StyledGame layoutId={stringPathId} onClick={fetchDetail}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>
          Game name : {name}
        </motion.h3>
        <p>Released Date: {released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(background_image, 640)}
          alt={name}
        />
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
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;