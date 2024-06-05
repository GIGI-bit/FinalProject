import { ProductModel } from "../Model/productModel";
import { ProductView } from "../View/productView";
import { Post } from "../types/post";
// import { writeJson } from "../GeneralFunctions/jsonWriter";

export class ProductController {
  view: ProductView;
  model: ProductModel;
  constructor(view: ProductView, model: ProductModel) {
    this.view = view;
    this.model = model;
    // this.view.bindAddProduct(this.addToCart.bind(this));
  }

  updateView(limit: number) {
    const posts = this.model.getProducts();
    this.view.ProductDisplayer(posts, limit);
  }

  addProduct(post: Post) {
    this.model.addProduct(post);
  }
  // addToCart(post: Post) {
  //   writeJson("cart.json", post);
  // }
}
