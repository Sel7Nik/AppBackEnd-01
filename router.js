import Router from 'express'
import PostController from './PostController.js'
//!--- Создание роутера
const router = new Router()
//!--- Маршруты для каждой операции

router.post('/posts', PostController.create) //?--- создание
router.get('/posts') //?--- получение всех
router.get('/posts/:id') //?--- получение одного по id
router.put('/posts') //?--- обновление
router.delete('/posts/:id') //?--- удаление по id

//!--- экспортируем роутер
export default router
