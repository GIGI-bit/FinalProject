import { Post } from "../types/post";
import { post } from "../JSONs/posts.json";

export class CartModel {
  Posts: Post[];
  constructor() {
    this.Posts = [];
    this.fillCart();
  }
  fillCart() {
    const str = localStorage.getItem("cart-items");
    this.Posts = str ? JSON.parse(str) : [];
  }
  addCart(newPost: Post) {
    post.push(newPost);
    this.fillCart();
  }
  getCarts() {
    return this.Posts;
  }
}
