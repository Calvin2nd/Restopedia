const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

const emptyFavoriteRestoText = 'Empty Favorite Resto';

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#posts');
  I.see(emptyFavoriteRestoText, '.resto-item__not__found');
});

Scenario('add favorites restaurant', async ({ I }) => {
  // periksa bahwa halaman favorites dalam keadaan kosong
  I.see(emptyFavoriteRestoText, '.resto-item__not__found');
  // kembali ke halaman home
  I.amOnPage('/');
  // memeriksa link dari content restoran
  I.seeElement('.posts-item__content a');
  // menyimpan dan mencari link pertama dari restoran
  const firstResto = locate('.posts-item__content a').first();
  // mengambil dan menyimpan nama restoran
  const firstRestoName = await I.grabTextFrom(firstResto);
  // melakukan action click pada link tersebut
  I.click(firstResto);
  // mencari element tombol like dengan id "likeButton"
  I.seeElement('#likeButton');
  // malekukan action click tombol like dengan id "likeButton"
  I.click('#likeButton');
  // melakukan redirect ke halaman favorites
  I.amOnPage('/#/favorites');
  // mencari element restoran yang di halaman favorites
  I.seeElement('.posts-item');
  // mengambil dan menyimpan nama restoran
  const favoriteRestoName = await I.grabTextFrom('.posts-item__title');
  // melakukan komparasi string nama kedua nama yang telah diambil
  assert.strictEqual(firstRestoName, favoriteRestoName);
});

Scenario('add and then remove favorites restaurant', async ({ I }) => {
  //
  // STEP E2E MENAMBAHKAN RESTO KE HALAMAN FAVORITES
  //
  // periksa bahwa halaman favorites dalam keadaan kosong
  I.see(emptyFavoriteRestoText, '.resto-item__not__found');
  // kembali ke halaman home
  I.amOnPage('/');
  // memeriksa link dari content restoran
  I.seeElement('.posts-item__content a');
  // menyimpan dan mencari link pertama dari restoran
  const firstResto = locate('.posts-item__content a').first();
  // mengambil dan menyimpan nama restoran
  const firstRestoName = await I.grabTextFrom(firstResto);
  // melakukan action click pada link tersebut
  I.click(firstResto);
  // mencari element tombol like dengan id "likeButton"
  I.seeElement('#likeButton');
  // malekukan action click tombol like dengan id "likeButton"
  I.click('#likeButton');
  // melakukan redirect ke halaman favorites
  I.amOnPage('/#/favorites');
  // mencari element restoran yang di halaman favorites
  I.seeElement('.posts-item');
  // mengambil dan menyimpan nama restoran
  const favoriteRestoName = await I.grabTextFrom('.posts-item__title');
  // melakukan komparasi string nama kedua nama yang telah diambil
  assert.strictEqual(firstRestoName, favoriteRestoName);

  //
  // STEP E2E MENGHAPUS RESTO KE HALAMAN FAVORITES SETELAH DITAMBAHKAN
  //
  // melakukan redirect ke halaman detail dari resto favorite
  I.click(favoriteRestoName);
  // mencari element tombol like dengan id "likeButton"
  I.seeElement('#likeButton');
  // malekukan action click tombol unlike dengan id "likeButton"
  I.click('#likeButton');
  // melakukan redirect ke halaman favorites
  I.amOnPage('/#/favorites');
  // memeriksa apakah halaman favorites sudah kosong (dihapus)
  I.see(emptyFavoriteRestoText, '.resto-item__not__found');
});
