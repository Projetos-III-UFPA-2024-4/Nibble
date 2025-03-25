const images = require.context("../assets/images", false, /\.(png|jpe?g|svg)$/);

const icons = images.keys().reduce((acc, file) => {
  const fileName = file.replace("./", "").replace(/\.(png|jpe?g|svg)$/, ""); 
  acc[fileName] = images(file);
  return acc;
}, {});

export default icons;



