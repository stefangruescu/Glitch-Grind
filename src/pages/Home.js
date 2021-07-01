import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../redux/actions/gamesAction';

import Game from '../components/game';
import GameDetail from '../components/game-detail';

import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  const gameData = [
    { title: 'Searched Results', data: searched },
    { title: 'Popular Games', data: popular },
    { title: 'New Games', data: newGames },
    { title: 'Upcoming Games', data: upcoming },
  ];

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {gameData.map((gameCategory) => {
          return gameCategory.data.length ? (
            <>
              <h2>{gameCategory.title}</h2>
              <Games>
                {gameCategory.data?.map((game) => (
                  <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                  />
                ))}
              </Games>
            </>
          ) : null;
        })}
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
