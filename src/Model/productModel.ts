import { Post } from "../types/post";
import { post } from "../JSONs/posts.json";

export class ProductModel {
  Posts: Post[];
  constructor() {
    this.Posts = [];
    this.fillProduct();
  }
  fillProduct() {
    if (this.Posts.length != 0) this.Posts = [];
    post.forEach((p) => {
      const newPost = new Post(p.title, p.category, p.price, p.img);
      newPost.isBestseller = p.isBestseller;
      newPost.situation = p.situation;
      this.Posts.push(newPost);
    });
  }
  addProduct(newPost: Post) {
    post.push(newPost);
    this.fillProduct();
  }
  getProducts() {
    return this.Posts;
  }
}
