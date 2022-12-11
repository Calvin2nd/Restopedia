import FavoriteRestoIdb from '../../data/favorites-restodb';
import { createRestoItemTemplate } from '../templates/templates';

const Favorites = {
  async render() {
    return ` 
    <div class="content" id="gridContent"> 
        <h1 class="latest__label">My Favorites Restaurant </h1>
        <div id="posts" class="posts">
        
        </div> 
    </div>`;
  },

  async afterRender() {
    const FavResto = await FavoriteRestoIdb.getAllFavResto();
    const restoContainer = document.querySelector('#posts');
    if (FavResto.length === 0) {
      restoContainer.innerHTML = '<div class="resto-item__not__found">Empty Favorite Resto</div>';
    }
    FavResto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorites;
