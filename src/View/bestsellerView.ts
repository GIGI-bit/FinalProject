import { shuffle } from "../GeneralFunctions/shuffle";
import { Post } from "../types/post";

export class BestsellerView {
  app: HTMLElement | null;
  bestsellerList: HTMLUListElement;
  divName: string;
  constructor(divName: string) {
    this.divName = divName;
    this.app = document.getElementById("app");
    this.bestsellerList = document.createElement("ul");
    this.bestsellerList.classList.add(divName + "__ul");
    const div = document.createElement("div");
    div.classList.add(divName);
    this.app?.appendChild(div);
    this.createFilters();
    div.appendChild(this.bestsellerList);
  }

  createFilters() {
    const filterList = document.createElement("ul");
    filterList.classList.add(this.divName + "__filter-ul");
    console.log("filterList :>> ", filterList);
    const filterDiv = document.createElement("div");
    filterDiv.classList.add(this.divName + "__filter-div");
    const optionsDiv = document.createElement("div");
    const allCategories = document.createElement("button");
    allCategories.textContent = "All Categories";
    const shirtsCategory = document.createElement("button");
    shirtsCategory.textContent = "T-Shirts";
    const hoodiesCategory = document.createElement("button");
    hoodiesCategory.textContent = "Hoodies";
    const jacketCategory = document.createElement("button");
    jacketCategory.textContent = "Jackets";
    const firstLI = document.createElement("li");
    const secondLI = document.createElement("li");
    const thirdLi = document.createElement("li");
    const fourthLI = document.createElement("li");

    const button = document.createElement("button");
    const filterImg = document.createElement("img");
    const filterText = document.createElement("p");
    filterImg.src = "/src/assets/icons/filter.png";
    filterText.textContent = "Filter";
    button.appendChild(filterImg);
    button.appendChild(filterText);
    button.classList.add(this.divName + "__filter-button");

    allCategories.classList.add(this.divName + "__options-button");
    allCategories.id = "all_" + this.divName;
    firstLI.appendChild(allCategories);
    shirtsCategory.classList.add(this.divName + "__options-button");
    shirtsCategory.id = "shirts_" + this.divName;
    secondLI.appendChild(shirtsCategory);
    hoodiesCategory.classList.add(this.divName + "__options-button");
    hoodiesCategory.id = "hoodies_" + this.divName;
    thirdLi.appendChild(hoodiesCategory);
    jacketCategory.classList.add(this.divName + "__options-button");
    jacketCategory.id = "jackets_" + this.divName;
    fourthLI.appendChild(jacketCategory);
    filterList.appendChild(firstLI);
    filterList.appendChild(secondLI);
    filterList.appendChild(thirdLi);
    filterList.appendChild(fourthLI);
    optionsDiv.appendChild(filterList);
    filterDiv.appendChild(optionsDiv);
    filterDiv.appendChild(button);
    const bestsellerDiv = document.querySelector("." + this.divName);

    bestsellerDiv?.appendChild(filterDiv);
  }

  BestsellerDisplayer(bestsellers: Post[], limit: number) {
    console.log("hello");
    const shuffledBestseller = shuffle(bestsellers);

    const allCategories = document.getElementById(
      "all_" + this.divName
    ) as HTMLButtonElement;

    const shirtsCategory = document.getElementById(
      "shirts_" + this.divName
    ) as HTMLButtonElement;
    const jacketCategory = document.getElementById(
      "jackets_" + this.divName
    ) as HTMLButtonElement;
    const hoodiesCategory = document.getElementById(
      "hoodies_" + this.divName
    ) as HTMLButtonElement;

    allCategories.addEventListener("click", (e) => {
      allCategories.style.color = "black";
      shirtsCategory.style.color = "#00000080";
      jacketCategory.style.color = "#00000080";
      hoodiesCategory.style.color = "#00000080";
      this.allCategoriesFilter(shuffledBestseller, limit);
    });

    shirtsCategory.addEventListener("click", (e) => {
      shirtsCategory.style.color = "black";
      allCategories.style.color = "#00000080";
      jacketCategory.style.color = "#00000080";
      hoodiesCategory.style.color = "#00000080";
      const arr = shuffledBestseller.filter((e) => {
        return e.category === "Dress";
      });
      this.allCategoriesFilter(
        arr,
        arr.length == limit ? limit : arr.length < limit ? arr.length : limit
      );
    });

    hoodiesCategory.addEventListener("click", (e) => {
      hoodiesCategory.style.color = "black";
      allCategories.style.color = "#00000080";
      jacketCategory.style.color = "#00000080";
      shirtsCategory.style.color = "#00000080";
      const arr = shuffledBestseller.filter((e) => {
        return e.category === "Hoodie";
      });
      this.allCategoriesFilter(
        arr,
        arr.length == limit ? limit : arr.length < limit ? arr.length : limit
      );
    });

    jacketCategory.addEventListener("click", (e) => {
      jacketCategory.style.color = "black";
      allCategories.style.color = "#00000080";
      hoodiesCategory.style.color = "#00000080";
      shirtsCategory.style.color = "#00000080";
      const arr = shuffledBestseller.filter((e) => {
        return e.category === "Jackets";
      });
      this.allCategoriesFilter(
        arr,
        arr.length == limit ? limit : arr.length < limit ? arr.length : limit
      );
    });
    allCategories.click();
    //
  }

  allCategoriesFilter(shuffledBestseller: Post[], limit: number) {
    this.bestsellerList.innerHTML = "";
    for (let i = 0; i < limit; i++) {
      //elementlerin yaradilmasi
      const bestsellerLi = document.createElement("li");
      const cartImg = document.createElement("img");
      const containerDiv = document.createElement("button"); //icerisinde img title price saxlayan div-dir
      const imgDiv = document.createElement("div"); //bu div sadece bestsellerun imagini ve "new","sale" kimi yazilarin div-ini saxliyacaq
      const img = document.createElement("img"); //bestseller-un img-i
      const title = document.createElement("p"); //bestsellerun title-i
      const dataDiv = document.createElement("div"); //daxilinde category ve price saxlayacaq
      const priceDiv = document.createElement("div"); //daxilinde eyer endirim varsa kohne ile yeni price yox endirim olmazsa sadece price saxlayacaq
      const category = document.createElement("p");
      const price = document.createElement("p");
      dataDiv.appendChild(category);
      dataDiv.appendChild(priceDiv);
      cartImg.src = "/src/assets/icons/basket.png";
      img.src = shuffledBestseller[i]?.img;
      imgDiv.appendChild(img);
      title.textContent = shuffledBestseller[i].title;
      category.textContent = shuffledBestseller[i].category;
      if (shuffledBestseller[i].situation !== "") {
        const situationDiv = document.createElement("div"); //"sale","hot" yazili div olacaq
        const situationText = document.createElement("p");
        situationDiv.classList.add(this.divName + "__situation-div");
        situationText.style.color = "white";
        if (
          shuffledBestseller[i].situation === "New" ||
          shuffledBestseller[i].situation === "HOT"
        ) {
          situationDiv.style.backgroundColor = "#FF6F61";
        } else {
          situationDiv.style.backgroundColor = "black";
        }
        situationText.textContent = shuffledBestseller[i].situation;
        situationDiv.appendChild(situationText);
        imgDiv.appendChild(situationDiv);
      }
      if (shuffledBestseller[i].situation === "SALE") {
        const delPrice = document.createElement("del");
        delPrice.textContent = shuffledBestseller[i].price.toString();
        delPrice.classList.add(this.divName + "__deleted-price");
        const newPrice = document.createElement("p");
        newPrice.classList.add(this.divName + "__new-price");
        newPrice.textContent =
          "$" +
          Math.round(
            shuffledBestseller[i].price -
              (shuffledBestseller[i].price / 100) * 5
          ).toString();
        priceDiv.appendChild(delPrice);
        priceDiv.appendChild(newPrice);
      } else {
        price.textContent = "$" + shuffledBestseller[i].price.toString();
        price.classList.add(this.divName + "__price");
        priceDiv.appendChild(price);
      }

      cartImg.onclick = () => {};

      //elementlere class-larin verilmesi
      containerDiv.classList.add(this.divName + "__container");
      cartImg.classList.add(this.divName + "__hover-image");
      imgDiv.classList.add(this.divName + "__img-container");
      img.classList.add(this.divName + "__img");
      title.classList.add(this.divName + "__title");
      dataDiv.classList.add(this.divName + "__data-container");
      priceDiv.classList.add(this.divName + "__price-container");
      category.classList.add(this.divName + "__category");
      bestsellerLi.classList.add(this.divName + "__li");
      containerDiv.appendChild(imgDiv);
      containerDiv.appendChild(title);
      containerDiv.appendChild(dataDiv);
      bestsellerLi.appendChild(containerDiv);
      bestsellerLi.appendChild(cartImg);
      this.bestsellerList.appendChild(bestsellerLi);
    }
  }
}
