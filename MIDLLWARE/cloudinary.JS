const cloudinary = require("cloudinary");
require('dotenv').config();


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: 313214681741639,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
cloudinary.config({
  cloud_name: 'doo7n85of',
  api_key:    313214681741639,
  api_secret: 'EMmeLBjndHhbx0YK05InjTAgNks',
});
console.log('sictot cloud 2',process.env.CLOUDINARY_API_SECRET
)
// Cloudinary Upload Image
const cloudinaryUploadImage = async (fileToUpload) => {
  try {
    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

// Cloudinary Remove Image
const cloudinaryRemoveImage = async (imagePublicId) => {
  try {
    const result = await cloudinary.uploader.destroy(imagePublicId);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

// Cloudinary Remove Multiple Image
const cloudinaryRemoveMultipleImage = async (publicIds) => {
  try {
    const result = await cloudinary.v2.api.delete_resources(publicIds);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error (cloudinary)");
  }
};

module.exports = {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
  cloudinaryRemoveMultipleImage,
};

// const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

// cloudinary.config({
//   cloud_name: 'doo7n85of',
//   api_key:    313214681741639,
//   api_secret: 'EMmeLBjndHhbx0YK05InjTAgNks',
// });

// const cloudinaryUploadImage = async (filePath) => {
//   try {
//     const result = await cloudinary.uploader.upload(filePath);
//     return result;
//   } catch (error) {
//     console.error('Cloudinary upload error:', error);
//     throw new Error(`Cloudinary upload error: ${error.message}`);
//   }
// };

// module.exports = { cloudinaryUploadImage };
