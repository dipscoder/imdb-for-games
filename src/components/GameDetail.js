import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
// Images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";

const GameDetail = ({ pathId }) => {
  // Exit Detail Page
  // console.log(pathId);
  const history = useHistory()
  // console.log(history);
  
  const extiDetailPage = (e) => {
    const element = e.target
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push('/')
    }
  }
  
  //Data
  const { gameDetail, screenshots, isLoading } = useSelector((state) => state.detail);

  // Rendering Platform logos
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
    
      default:
        return gamepad;
    }
  }

  return (
    <>
      { !isLoading && (
      <CardShadow className="shadow" onClick={extiDetailPage}>
        <Detail layoutId={pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`} >{gameDetail.name}</motion.h3>
              <p>Rating: {gameDetail.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {gameDetail.platforms.map((data) => (
                  <img key={data.platform.id} alt={data.platform.name} src={getPlatform(data.platform.name)} />
                  ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img layoutId={`image ${pathId}`} src={smallImage(gameDetail.background_image,1280)} alt={gameDetail.background_image} />
          </Media>
          <Description>
            <p>{gameDetail.description_raw}</p>
          </Description>
          <div className="gallery">
            {screenshots.results.map((screen) => (
              <img src={smallImage(screen.image,1280)} key={screen.id} alt={screen.image} />
              ))}
          </div>
        </Detail>
      </CardShadow> )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;


export default GameDetail;