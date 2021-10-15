import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'
const PORT = 5000

const app = express()
//!--- адрес подключения к БД
const DB_URL =
  'mongodb+srv://user:user@cluster0.do71t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//!--- Если данные были отправлены в формате JSON
app.use(express.json())
//!--- Регистрация роутеров
app.use('/api', router)
//app.use('/user', userRouter)  //?--- пример регистрации
//app.use('/any', anyRouter)  //?--- других роутеров

//!-- post
app.post('/', async (req, res) => {
  try {
    const { author, title, content, picture } = req.body
    const post = await Post.create({ author, title, content, picture })
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})

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
