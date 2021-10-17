import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
const PORT = 5000

const app = express()
//!--- адрес подключения к БД
const DB_URL =
  'mongodb+srv://user:user@cluster0.do71t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//!--- Если данные были отправлены в формате JSON
app.use(express.json())
//!--- Регистрация роутеров --- step 1
app.use('/api', router)

async function startApp(params) {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT' + PORT)
    })
  } catch (err) {
    console.log(err)
  }
}
startApp()
