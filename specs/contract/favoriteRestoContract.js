/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the restaurant that has been added', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });

    expect(await favoriteResto.getFavResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getFavResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getFavResto(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.putFavResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllFavResto())
      .toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });

    expect(await favoriteResto.getAllFavResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });
    favoriteResto.putFavResto({ id: 3 });

    await favoriteResto.deleteFavResto(1);

    expect(await favoriteResto.getAllFavResto())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });
    favoriteResto.putFavResto({ id: 3 });

    await favoriteResto.deleteFavResto(4);

    expect(await favoriteResto.getAllFavResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
