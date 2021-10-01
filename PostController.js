import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostController();
