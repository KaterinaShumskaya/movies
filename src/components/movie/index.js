import config from "../../config";

export default function movie(data) {
  const mappedData = mapData(data);
  return `
        <h2>${mappedData.title}</h2>
        <date>${mappedData.date}</date>
        <div><img class='movie-poster' src='${mappedData.imgSrc}'></div>
        <div>${mappedData.overview}</div>
        <div>${mappedData.popularity}</div>
 `;
}

function mapData(data) {
  return {
    title: data.title || data.original_title || "Unknown",
    date: data.release_date,
    popularity: data.popularity,
    overview: data.overview,
    imgSrc: getImagePath(data),
  };
}

function getImagePath(data) {
  const url = data.poster_path || data.backdrop_path;
  if (url) {
    return config.imageBaseUrl + url;
  }
  return config.noImgUrl;
}
