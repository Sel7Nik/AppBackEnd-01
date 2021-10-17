import * as uuid from 'uuid'
import * as path from 'path'
class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg' //?--- генерируем имя файла
      const filePath = path.resolve('static', fileName) //?--- путь для сохранения
      file.mv(filePath) //?--- сохраняем
      return fileName //?--- возвращаем
    } catch (err) {
      console.log(err)
    }
  }
}
export default new FileService()
