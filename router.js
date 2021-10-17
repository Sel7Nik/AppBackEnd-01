import Router from 'express'
import PostController from './PostController.js'

//!--- Создание роутера
const router = new Router()
//!--- Маршруты для каждой операции
//?--- PostController.create --- step 2
router.post('/posts', PostController.create) //?--- создание
router.get('/posts', PostController.getAll) //?--- получение всех
router.get('/posts/:id', PostController.getOne) //?--- получение одного по id
router.put('/posts', PostController.update) //?--- обновление
router.delete('/posts/:id', PostController.delete) //?--- удаление по id

//!--- экспортируем роутер --->> index.js -->> step 1
export default router
