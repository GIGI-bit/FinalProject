import { BestsellerModel } from "../Model/bestsellerModel";
import { BestsellerView } from "../View/bestsellerView";
import { Post } from "../types/post";

export class BestsellerController {
  view: BestsellerView;
  model: BestsellerModel;
  constructor(view: BestsellerView, model: BestsellerModel) {
    this.view = view;
    this.model = model;
  }

  updateView(limit: number) {
    const posts = this.model.getBestsellers();
    this.view.BestsellerDisplayer(posts, limit);
  }

  addPartner(post: Post) {
    this.model.addBestseller(post);
  }
}
