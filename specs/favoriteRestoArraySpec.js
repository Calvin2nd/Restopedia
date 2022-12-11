/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getFavResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllFavResto() {
    return favoriteResto;
  },

  putFavResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    if (this.getFavResto(resto.id)) {
      return;
    }
    favoriteResto.push(resto);
  },

  deleteFavResto(id) {
    favoriteResto = favoriteResto.filter((movie) => movie.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
