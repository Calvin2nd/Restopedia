import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/templates';

const MainPage = {
  async render() {
    return `  
      <div class="sub__content"> 
        <div id="three_columns" class="three_columns">
          <div class="three-item">
            <h1 class="three__title">Cari restaurant terbaik</h1>
            <p class="three__text">3000+ tempat kuliner - dari umkm hingga restaurant terkenal dikotamu</p>
          </div> 
          <div class="three-item">
            <h1 class="three__title">Lihat review restaurant</h1>
            <p class="three__text">Perhatikan review objective dari para penikmat kuliner dikotamu</p>
          </div> 
          <div class="three-item">
            <h1 class="three__title">Nikmati makanan terbaik</h1>
            <p class="three__text">Nikmati pilihan kuliner terbaik dan rekomendasikan kepada kerabatmu</p>
          </div> 
        </div> 
      </div>
      <div class="content" id="gridContent"> 
          <h1 class="latest__label">Explore Your Restaurant</h1>
          <div id="posts" class="posts">
          
          </div> 
      </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant();
    const restoContainer = document.querySelector('#posts');
    restaurant.restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default MainPage;
