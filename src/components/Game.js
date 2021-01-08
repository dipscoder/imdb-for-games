import React from "react";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Game({game : { name, released, background_image }}) {
  return (
    <StyledGame>
      <h3>Game name : {name}</h3>
      <p>Released Date: {released}</p>
      <motion.img whileHover={{scale : 1.05}} transition={transition} src={background_image} alt={name} />
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;