//conect database//

const connectMongoDB = async () => {
const mongoose = require('mongoose')
              .connect(process.env.URL)
              .then   ((     ) => console.log  ('Connected successfully'  ))
              .catch  ((error) => console.error('Connection error:', error))

}
module.exports = { connectMongoDB };


