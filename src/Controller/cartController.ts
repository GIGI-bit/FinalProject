import { CartModel } from "../Model/cartModel";
import { CartView } from "../View/cartView";
import { Post } from "../types/post";

export class CartController {
  view: CartView;
  model: CartModel;
  constructor(view: CartView, model: CartModel) {
    this.view = view;
    this.model = model;
  }

  updateView() {
    const posts = this.model.getCarts();
    this.view.displayer(posts);
  }

  addCart(post: Post) {
    this.model.addCart(post);
  }
}
