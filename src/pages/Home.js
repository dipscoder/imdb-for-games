import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// Animation
import styled from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
// Components
import loadGames from "../actions/gameAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";


function Home() {

  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]
  // console.log("Location = ",location,"PathId = ",pathId);


  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  const { popularGames, newGames, upcomingGames, searched } = useSelector(state => state.games)
  
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show" >
      <AnimateSharedLayout type="crossfade" >
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>   
              {searched.map((game) => (
                <Game key={game.id} game={game} />
              ) )}
            </Games>
          </div>
        ) : ('') }


        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map((game) => (
            <Game key={game.id} game={game} />
            ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popularGames.map((game) => (
            <Game key={game.id} game={game} />
            ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game key={game.id} game={game} />
            ))}
        </Games>
      
      </AnimateSharedLayout>

    </GameList>

    
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 0.5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
//create a grid
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;