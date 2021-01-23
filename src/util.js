// Media Resize
// ? How it works - First we will take the imagePath & change its size by replacing its parameters with the help of match and regex.
// ? Example imagePaths that we will get - https://media.rawg.io/media/games/9ac/9acdbcf11b7aa2c9d629ee38f8fa8c71.jpg or https://media.rawg.io/media/screeshots/9ac/9acdbcf11b7aa2c9d629ee38f8fa8c71.jpg
// ? imagePath that we will return - https://media.rawg.io/media/resize/${size}/-/games/9ac/9acdbcf11b7aa2c9d629ee38f8fa8c71.jpg or https://media.rawg.io/media/resize/${size}/-/screenshots/9ac/9acdbcf11b7aa2c9d629ee38f8fa8c71.jpg

// .match() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// regex - https://youtu.be/rhzKDrUiJVk

export const smallImage = (imagePath, size) => {
  // ! Have to define this condition because of this error --> TypeError: Cannot read property 'match' of null
  // Reason for the error - Fetching a game(new game) from the api which does have any background_image
  if(imagePath === null){
    return;
  }
  else{

    const image = imagePath.match(/media\/games/)
    ? imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`)
    : imagePath.replace(
      "/media/screenshots/",
      `/media/resize/${size}/-/screenshots/`
      );
      return image;
    } 
};

