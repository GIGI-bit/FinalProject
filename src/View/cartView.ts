import { createECDH } from "crypto";
import { Post } from "../types/post";

export class CartView {
  app: HTMLElement | null;
  productList: HTMLUListElement;
  modalDiv: HTMLDivElement;
  constructor() {
    this.app = document.getElementById("app");
    this.productList = document.createElement("ul");
    this.modalDiv = document.createElement("div");
    this.modalDiv.classList.add("cart");
    this.productList.classList.add("cart__ul");

    this.app?.appendChild(this.modalDiv);
  }

  displayer(posts: Post[]) {
    posts.forEach((p) => {
      const content = document.createElement("div");
      const productCountainer = document.createElement("div");
      const cartImg = document.createElement("img");
      const dataDiv = document.createElement("div");
      const title = document.createElement("p");
      const priceDiv = document.createElement("div");
      const category = document.createElement("p");
      const price = document.createElement("p");
      content.classList.add("cart__content-div");
      productCountainer.classList.add("cart__product-container");
      cartImg.classList.add("cart__img");
      dataDiv.classList.add("cart__data-div");
      title.classList.add("cart__title");
      priceDiv.classList.add("cart__price-div");
      category.classList.add("cart__category");
      price.classList.add("cart__price");
      if (p.situation === "SALE") {
        price.textContent =
          "$" + Math.round(p.price - (p.price / 100) * 5).toString();
        price.style.color = "#FF6F61";
      } else {
        price.textContent = "$" + p.price.toString();
      }
      title.textContent = p.title;
      category.textContent = p.category;
      cartImg.src = p.img;
      this.modalDiv.onclick = () => {
        this.app?.removeChild(this.modalDiv);
      };
      priceDiv.appendChild(category);
      priceDiv.appendChild(price);
      dataDiv.appendChild(title);
      dataDiv.appendChild(priceDiv);
      productCountainer.appendChild(cartImg);
      productCountainer.appendChild(dataDiv);
      const liElement = document.createElement("li");
      liElement.appendChild(productCountainer);
      this.productList.appendChild(liElement);
      content.appendChild(this.productList);
      this.modalDiv.appendChild(content);
    });
  }
}
