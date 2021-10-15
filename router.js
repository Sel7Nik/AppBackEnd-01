import router from 'express'
//!--- Создание роутера
const router = new Router()
//!--- Маршруты для каждой операции

router.post('/posts', PostController.create) //?--- создание
router.get('/posts', PostController.getAll) //?--- получение всех
router.get('/posts/:id', PostController.getOne) //?--- получение одного по id
router.put('/posts', PostController.update) //?--- обновление
router.delete('/posts/:id', PostController.delete) //?--- удаление
