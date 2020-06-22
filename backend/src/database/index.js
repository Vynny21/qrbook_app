import mongoose from 'mongoose'
require('dotenv-safe').config()

mongoose.connect(process.env.MONGO_URI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso.')
  }).catch((error) => {
    console.log('Erro ao se conectar com o MongoDB:' + error)
  })

export default mongoose