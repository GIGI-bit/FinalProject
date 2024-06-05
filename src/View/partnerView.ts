import { Partner } from "../types/partner";

export class PartnerView {
  app: HTMLElement | null;
  partnerList: HTMLUListElement;
  constructor() {
    this.app = document.getElementById("app");
    this.partnerList = document.createElement("ul");
    this.partnerList.classList.add("partners__ul");
    const section = document.createElement("section");
    section.classList.add("partners");
    section.appendChild(this.partnerList);
    this.app?.appendChild(section);
  }
  displayPartner(partners: Partner[]) {
    this.partnerList.innerHTML = "";
    partners.forEach((p) => {
      const partnerItem = document.createElement("li");
      partnerItem.classList.add("partners__li");
      const partnerImg = document.createElement("img");
      partnerImg.src = p.source;
      partnerImg.alt = p.alt;
      partnerItem.appendChild(partnerImg);
      this.partnerList.appendChild(partnerItem);
    });
  }
}
