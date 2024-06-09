//conect database//

const connectMongoDB = async () => {
const mongoose = require('mongoose')
              .connect(process.env.URL)
              .then   ((     ) => console.log  ('Connected successfully'  ))
              .catch  ((error) => console.error('Connection error:', error))

}
module.exports = { connectMongoDB };

// const mongoose = require('mongoose');

// const connectMongoDB = async () => {
//     try {
//         await mongoose.connect(process.env.URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         });
//         console.log('Connected successfully');
//     } catch (error) {
//         console.error('Connection error:', error);
//     }
// };

// module.exports = { connectMongoDB };
