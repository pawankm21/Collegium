var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function deleteImage(id) {
  cloudinary.uploader.destroy(id, function (error, result) {
    console.log(result, error);
  });
}
function uploadImage(id) {
  cloudinary.uploader.upload(id);
}
module.exports = {
  deleteImage,
  uploadImage,
};
