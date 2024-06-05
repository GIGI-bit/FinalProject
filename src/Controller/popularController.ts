import { PopularModel } from "../Model/popularModel";
import { PopularView } from "../View/popularView";
import { Post } from "../types/post";

export class PopularController {
  view: PopularView;
  model: PopularModel;
  constructor(view: PopularView, model: PopularModel) {
    this.view = view;
    this.model = model;
  }

  updateView() {
    const posts = this.model.getPopolarPosts();
    this.view.displaySection(posts);
  }
  addPartner(post: Post) {
    this.model.addPopularPosts(post);
    this.updateView();
  }
}
