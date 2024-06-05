import { Post } from "../types/post";
import { shuffle } from "../GeneralFunctions/shuffle";

export class PopularView {
  app: HTMLElement | null;
  popularList: HTMLUListElement;
  section: HTMLElement;
  constructor() {
    this.app = document.getElementById("app");
    this.popularList = document.createElement("ul");
    this.section = document.createElement("section");
    this.section.classList.add("popular");
    this.popularList.classList.add("popular__ul");
    this.app?.appendChild(this.section);
  }
  displaySection(posts: Post[]) {
    const mainCont = document.createElement("div");
    mainCont.classList.add("popular__main-cont");
    const text = document.createElement("h2");
    text.textContent = "EXPLORE NEW AND POPULAR STYLES";
    text.classList.add("popular__title");
    const container = document.createElement("div");
    const mainImg = document.createElement("img");
    const mainImgDiv = document.createElement("div");
    mainImgDiv.classList.add("popular__main-img-div");
    mainImgDiv.appendChild(mainImg);
    mainImg.classList.add("popular__main-img");
    container.classList.add("popular__container");
    const newPosts = shuffle(posts);
    let counter = 1;
    for (let i = 0; i < newPosts.length; i++) {
      if (mainImg.src === "" && newPosts[i].situation === "") {
        mainImg.src = newPosts[i].img;
        continue;
      }
      const li = document.createElement("li");
      const img = document.createElement("img");
      const div = document.createElement("div");
      div.style.position = "relative";
      div.appendChild(img);
      img.classList.add("popular__img");
      img.src = newPosts[i].img;
      li.appendChild(div);
      li.classList.add("popular__li");
      counter += 1;
      if (newPosts[i].situation !== "") {
        const Div = document.createElement("div");
        Div.classList.add("popular__situation-div");
        const Text = document.createElement("p");
        Text.textContent = newPosts[i].situation;
        Text.style.color = "white";
        Div.appendChild(Text);
        if (
          newPosts[i].situation === "New" ||
          newPosts[i].situation === "HOT"
        ) {
          Div.style.backgroundColor = "#FF6F61";
        } else {
          Div.style.backgroundColor = "black";
        }
        div.appendChild(Div);
      }
      this.popularList.appendChild(li);
      if (counter == 5) {
        break;
      }
    }
    container.appendChild(this.popularList);
    mainCont.appendChild(text);
    mainCont.appendChild(mainImgDiv);
    mainCont.appendChild(container);
    this.section.appendChild(mainCont);
  }
}
