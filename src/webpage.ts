import "./sass/_main.scss";
import "./sass/_zaraStyle.scss";
import "./sass/_popularStyle.scss";
import "./sass/_productStyle.scss";
import "./sass/_discountStyle.scss";
import "./sass/_bestsellerStyle.scss";
import "./sass/_footer.scss";
import "./sass/_cartStyles.scss";
import { footerDivCreator } from "./GeneralFunctions/footerCreatorts";
import headerImg from "./JSONs/db.json";
import { post } from "./JSONs/posts.json";
import { catalog } from "./JSONs/footer.json";
import { aboutUs } from "./JSONs/footer.json";
import { customerService } from "./JSONs/footer.json";
import { newsletter } from "./JSONs/newsletters.json";
import { PartnerModel } from "./Model/partnerModel";
import { PartnerController } from "./Controller/partnerController";
import { PartnerView } from "./View/partnerView";
import { PopularController } from "./Controller/popularController";
import { PopularView } from "./View/popularView";
import { PopularModel } from "./Model/popularModel";
import { ProductController } from "./Controller/ProductController";
import { ProductView } from "./View/productView";
import { ProductModel } from "./Model/productModel";
import { BestsellerController } from "./Controller/bestsellerController";
import { BestsellerModel } from "./Model/bestsellerModel";
import { BestsellerView } from "./View/bestsellerView";
import { CartController } from "./Controller/cartController";
import { CartView } from "./View/cartView";
import { CartModel } from "./Model/cartModel";
// import { createHeader } from "./GeneralFunctions/createHeader";

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector<HTMLDivElement>("#app_");

  if (appDiv) {
    appDiv.innerHTML = `
      <header class="header">
          <div class="header__div">
              <img class="header__search-icon" src="/src/assets/icons/search-icon.png" alt="Search Icon" />
              <img class="header__logo" src="/src/assets/logos/logo.png" alt="Logo" />
              <div class="header__actions">
                  <button class="header__account-btn">
                      <div>
                          <img src="/src/assets/icons/user.png" alt="User Icon" />
                          <p>Account</p>
                      </div>
                  </button>
                  <button class="header__shop-button">
                      <img src="/src/assets/icons/black--basket.png" alt="Basket Icon" />
                      <p>Shopping</p>
                  </button>
              </div>
          </div>
          <div class="header__divider"></div>
          <nav class="nav">
              <ul class="nav__ul">
                  <li>Jewelry & Accessories</li>
                  <li>Clothing & Shoes</li>
                  <li>Home & Living</li>
                  <li>Wedding & Party</li>
                  <li>Toys & Entertainment</li>
                  <li>Art & Collectibles</li>
                  <li>Craft Supplies & Tools</li>
              </ul>
          </nav>
      </header>`;

    console.log("HTML content set");

    const accountButton = document.querySelector<HTMLButtonElement>(
      ".header__shop-button"
    );

    if (accountButton) {
      accountButton.onclick = () => {
        const cartController = new CartController(
          new CartView(),
          new CartModel()
        );
        cartController.updateView();
      };
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.querySelector<HTMLDivElement>("#app");
  async function createIntroSection(): Promise<void> {
    const introSection = document.createElement("intro");
    introSection.className = "intro";
    const introItems: string = `<div>
  <h1 class="intro__header">Collections</h1>
  <h2 class="intro__text">
  You Can Explore Ans Shop Many Differnt Collection 
  </h2>
  <h2 class="intro__text">From Various Barands
  Here.</h2>
  <button class="intro__button">
  <img src="/src/assets/icons/white-basket.png" alt="" />
  
    <p>Shop Now</p>
    </button>
    </div>
    <div class="intro__img-div">
    <img class="intro__girl-img" src="${headerImg["header-imgs"]["intro-img"]}" alt="" />
    <div class="intro__frame"></div>
    </div>
    <img
    class="intro__left-decor"
    src="/src/assets/frames/Frame (1).png"
    alt=""
    />
    <img
    class="intro__right-decor"
  src="/src/assets/frames/Frame.png"
  alt=""
  />`;
    introSection.insertAdjacentHTML("beforeend", introItems);
    document.getElementById("app")?.appendChild(introSection);
  }

  createIntroSection();
  const partnerController = new PartnerController(
    new PartnerView(),
    new PartnerModel()
  );
  partnerController.updateView();

  const popularController = new PopularController(
    new PopularView(),
    new PopularModel()
  );
  popularController.updateView();

  document.querySelector<HTMLDivElement>("#app")!.innerHTML += `
<h2 class="products__header">Or Subscribe To The Newsletter</h2>
`;

  const productController = new ProductController(
    new ProductView("products"),
    new ProductModel()
  );

  productController.updateView(8);

  async function createZaraSection(): Promise<void> {
    const zaraSection = document.createElement("section");
    zaraSection.className = "zara";
    const zaraItems: string = `
 
  <div class="zara__div">
    <img
      src="./src/assets/frames/background-img.png"
      alt=""
      class="zara__bg"
    />
    <img
      src="https://shorturl.at/hRTcV"
      alt=""
      class="zara__floating-img"
    />
    <div class="zara__data-div">
      <img src="https://shorturl.at/hB7I9" alt="" class="zara__img" />
      <p class="zara__text">
        Lustrous yet understated. The new evening wear collection
        exclusively offered at the reopened Giorgio Armani boutique in Los
        Angeles.
      </p>
      <button class="zara__button">See Collection</button>
    </div>
  </div>
  `;
    zaraSection.insertAdjacentHTML("beforeend", zaraItems);
    document.getElementById("app")?.appendChild(zaraSection);
  }

  createZaraSection();

  async function createBestseller(): Promise<void> {
    const bestSellerSection = document.createElement("section");
    bestSellerSection.className = "bestseller";
    const bestSellerItem: string = `<h2 class="bestseller__header">Best Sellers</h2>`;
    bestSellerSection.insertAdjacentHTML("beforeend", bestSellerItem);
    document.getElementById("app")?.appendChild(bestSellerSection);
  }

  createBestseller();

  const bestsellerController = new BestsellerController(
    new BestsellerView("bestseller"),
    new BestsellerModel()
  );
  bestsellerController.updateView(4);

  // discounts section ->
  // #region Discount
  const discountSection = document.createElement("section");
  const discountHeader = document.createElement("h2");
  const discountUl = document.createElement("ul");
  const newsletterHeader = document.createElement("h2");
  const inputDiv = document.createElement("div");
  const newsletterInput = document.createElement("input");
  const newsletterButton = document.createElement("button");
  discountSection.classList.add("discount");
  discountHeader.classList.add("discount__header");
  discountUl.classList.add("discount__ul");
  newsletterHeader.classList.add("newsletter__header");
  inputDiv.classList.add("newsletter__input-div");
  newsletterInput.classList.add("newsletter__input");
  newsletterButton.classList.add("newsletter__button");

  let counter = 0;
  for (let i = 0; counter < 6; i++) {
    if (post[i].situation == "New") {
      const imgElement = document.createElement("img");
      const liElement = document.createElement("li");
      imgElement.classList.add("discount__img");
      liElement.classList.add("discount__li");
      imgElement.src = post[i].img;
      liElement.appendChild(imgElement);
      discountUl.appendChild(liElement);
      counter += 1;
    }
  }

  discountHeader.textContent = "Follow Products And Discounts On Instagram";
  newsletterHeader.textContent = "Or Subscribe To The Newsletter";
  newsletterInput.placeholder = "Email Address...";
  newsletterButton.textContent = "Submit";

  newsletterButton.onclick = () => {};

  newsletter;

  const app = document.querySelector("#app");
  discountSection.appendChild(discountHeader);
  discountSection.appendChild(discountUl);
  discountSection.appendChild(newsletterHeader);
  inputDiv?.appendChild(newsletterInput);
  inputDiv.appendChild(newsletterButton);
  discountSection.appendChild(inputDiv);
  app?.appendChild(discountSection);
  // #endregion;

  // #region Footer
  const footerSecttion = document.createElement("section");
  const topDiv = document.createElement("div");
  const bottomDiv = document.createElement("div");
  footerSecttion.classList.add("footer");
  topDiv.classList.add("footer__div-top");
  bottomDiv.classList.add("footer__div-bottom");

  // #region TopFooter

  // #region Socials
  const socialsDiv = document.createElement("div");
  const logoImg = document.createElement("img");
  const loremText = document.createElement("p");
  const socialsUl = document.createElement("ul");
  const socialLi = document.createElement("li");
  const socialLi2 = document.createElement("li");
  const socialLi3 = document.createElement("li");
  const socialLi4 = document.createElement("li");
  loremText.textContent =
    "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua";
  const facebook = document.createElement("img");
  const twitter = document.createElement("img");
  const linkedin = document.createElement("img");
  const instagram = document.createElement("img");

  socialsDiv.classList.add("footer__socials-div");
  logoImg.src = "./src/assets/logos/logo.png";
  facebook.src = "./src/assets/socials/facebook.png";
  twitter.src = "./src/assets/socials/twitter.png";
  twitter.style.paddingTop = "0.3vw";
  linkedin.src = "./src/assets/socials/in.png";
  instagram.src = "./src/assets/socials/instagram.png";
  socialsUl.classList.add("footer__socials-ul");
  loremText.classList.add("footer__lorem-text");

  socialLi.appendChild(facebook);
  socialLi2.appendChild(twitter);
  socialLi3.appendChild(linkedin);
  socialLi4.appendChild(instagram);
  socialsUl.appendChild(socialLi);
  socialsUl.appendChild(socialLi2);
  socialsUl.appendChild(socialLi3);
  socialsUl.appendChild(socialLi4);
  socialsDiv.appendChild(logoImg);
  socialsDiv.appendChild(loremText);
  socialsDiv.appendChild(socialsUl);
  topDiv.appendChild(socialsDiv);
  // #endregion

  // #region  Catalog

  topDiv.appendChild(footerDivCreator(catalog, "catalog"));

  // #endregion

  // #region About Us
  topDiv.appendChild(footerDivCreator(aboutUs, "aboutUs"));
  // #endregion

  // #region Customer
  topDiv.appendChild(footerDivCreator(customerService, "customerService"));
  // #endregion

  // #endregion

  // #region BottomFooter

  const copyright = document.createElement("p");
  const cardImg = document.createElement("img");
  const scrollButton = document.createElement("button");
  const upArrow = document.createElement("img");
  scrollButton.textContent = "Scroll To Up";
  scrollButton.classList.add("footer__scroll-btn");
  upArrow.src = "./src/assets/icons/arrow.png";
  scrollButton.appendChild(upArrow);

  scrollButton.onclick = () => {
    const pageHead = document.querySelector(".header");
    pageHead?.scrollIntoView({ behavior: "smooth" });
  };

  cardImg.src = "./src/assets/icons/icons_payment.png";
  copyright.textContent = "© 2022 Coral , Inc.";
  copyright.classList.add("footer__copyright");
  bottomDiv.appendChild(copyright);
  bottomDiv.appendChild(cardImg);
  bottomDiv.appendChild(scrollButton);
  // #endregion

  footerSecttion.appendChild(topDiv);
  footerSecttion.appendChild(bottomDiv);
  app?.appendChild(footerSecttion);
  // #endregion
});
