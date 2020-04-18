import axios from "axios";

const api = axios.create({
  timeout: 1000 * 5,
});

const transformAlbum = (it, idx) => ({
  id: it.id.attributes['im:id'],
  img: it['im:image'][0].label,
  num: idx + 1,
  title: it['im:name'].label,
  artist: it['im:artist'].label,
  genre: it.category.attributes.label,
  price: it['im:price'].label,
  releaseDate: it['im:releaseDate'].attributes.label,
});

const getTopAlbumsCall = async () => {
  const res = await api.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  return res.data.feed.entry.map(transformAlbum);
};



export { getTopAlbumsCall }
