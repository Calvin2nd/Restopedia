/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the movie that has been added', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });

    expect(await favoriteResto.getFavResto(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getFavResto(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getFavResto(3))
      .toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteResto.putFavResto({ aProperty: 'property' });

    expect(await favoriteResto.getAllFavResto())
      .toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteResto.putFavResto({ id: 1 });
    favoriteResto.putFavResto({ id: 2 });

    expect(await favoriteResto.getAllFavResto())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite movie', async () => {
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

  it('should handle request to remove a movie even though the movie has not been added', async () => {
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
