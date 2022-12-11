import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/templates';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorites-restodb';

const Detail = {
  async render() {
    return `
      <div id="likeButtonContainer"></div>
      <div class="content" id="gridContent"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('.content');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
