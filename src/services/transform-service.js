const transformAlbum = (it, idx) => ({
  id: it.id.attributes['im:id'],
  img: it['im:image'][0].label,
  num: idx + 1,
  title: it['im:name'].label,
  artist: it['im:artist'].label,
  genre: it.category.attributes.label,
  price: it['im:price'].label,
  releaseDate: it['im:releaseDate'].attributes.label,
  albumLink: it.link.attributes.href,
  genreLink: it.category.attributes.scheme,
  artistLink: it['im:artist'].attributes ? it['im:artist'].attributes.href : it.link.attributes.href,
});

export { transformAlbum };
