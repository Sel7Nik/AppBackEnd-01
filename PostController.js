import PostService from './PostService.js'
import fileService from './fileService.js'
//!--- class для обработки постов
class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture)
      res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll()
      return res.json(posts)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async getOne(req, res) {
    try {
      const posts = await PostService.getOne(req.params.id)
      return res.json(posts)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body, req.files.picture)
      return res.json(updatedPost)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id)
      return res.json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default new PostController()
