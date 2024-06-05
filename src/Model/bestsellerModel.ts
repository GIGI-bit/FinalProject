import { Post } from "../types/post";
import { post } from "../JSONs/posts.json";

export class BestsellerModel {
  Posts: Post[];
  constructor() {
    this.Posts = [];
    this.fillBestseller();
  }
  fillBestseller() {
    if (this.Posts.length != 0) this.Posts = [];
    post.forEach((p) => {
      if (p.isBestseller) {
        const newPost = new Post(p.title, p.category, p.price, p.img);
        newPost.isBestseller = p.isBestseller;
        newPost.situation = p.situation;
        this.Posts.push(newPost);
      }
    });
  }
  addBestseller(newPost: Post) {
    post.push(newPost);
    this.fillBestseller();
  }
  getBestsellers() {
    return this.Posts;
  }
}
