export class Post {
  title: string;
  category: string;
  price: number;
  situation: string;
  isBestseller: boolean;
  img: string;
  constructor(title: string, category: string, price: number, img: string) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
    this.situation = "";
    this.isBestseller = false;
  }
  setBestseller() {
    this.isBestseller ? false : true;
  }
  setSituation(situation: string) {
    this.situation = situation;
  }
}
