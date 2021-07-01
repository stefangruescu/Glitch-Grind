import axios from 'axios';
import {
  newGamesURL,
  popularGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from '../../api';

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(gameName));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results,
    },
  });
};