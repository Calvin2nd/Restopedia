/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorites-restodb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllFavResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteFavResto(resto.id);
    });
  });
  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
