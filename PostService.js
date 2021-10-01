import Post from './Post.js';
import FileService from './fileService.js';

class PostService {
  async create(post, picture) {
    const fileName = FileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    const id = post._id;
    if (!id) {
      throw new Error('Id не указан');
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error('Id не указан');
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
