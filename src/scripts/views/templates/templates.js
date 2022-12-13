import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `  
    <div class="detail__wrap" >
        <div class="detail-resto__rating__title"> 
            <div class="detail-resto__title">
                <h1 class="detail-resto__title">${resto.name}</h1> 
                <p class="detail-resto__location">${resto.address}, ${resto.city}, Indonesia</p> 
            </div>
            <div class="detail-resto__rating">
                ⭐️<span>${resto.rating}/5</span>
            </div>  
        </div>
        <div class="detail-resto__img__desc">
            <p class="detail-resto__description">${resto.description}</p>
            <img class="detail-resto__img lazyload" alt="${resto.name}" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL('large') + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        </div>
        <div id="detail-resto__food__drink" class="detail-resto__food__drink">
            <div class="detail-resto__ff">
                <h1>Menu Makanan</h1>
                <ul>
                    ${resto.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
                </ul>
            </div>
            <div class="detail-resto__ff">
                <h1>Menu Minuman</h1>
                <ul>
                 ${resto.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
                </ul>
            </div> 
        </div>
        <div class="detail-resto__review__customer">
            <h1> Customer Review </h1> 
            ${resto.customerReviews.map((comment) => ` 
                <div class="be-comment-block">
                    <div class="be-comment">
                        <div class="be-img-comment">
                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="be-ava-comment">
                        </div>
                    </div>
                    <div class="be-comment-content">
                        <span class="be-comment-name">
                            ${comment.name}
                        </span>
                        <span class="be-comment-time">
                            <i class="fa fa-clock-o"></i>  ${comment.date}
                        </span>
                        <p class="be-comment-text">
                            ${comment.review}
                        </p>
                    </div>
                </div>
            `).join('')}
        </div>
 
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="posts-item">
        <a href="/#/detail/${resto.id}">
            <img class="lazyload posts-item__thumbnail" alt="${resto.name}" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL('small') + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        </a>
        <div class="posts-item__content">
            <a class="posts-item__title" href="/#/detail/${resto.id}">${resto.name}</a>
            <p class="posts-item__rating">⭐️<span class="posts-item__rating__score">${resto.rating} / 5</span></p> 
            <p class="posts-item__city">${resto.city}, Indonesia</p>
        </div> 
    </div> 
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i> 
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
