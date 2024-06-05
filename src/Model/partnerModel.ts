import { Partner } from "../types/partner";
import partner from "../JSONs/partners.json";

export class PartnerModel {
  partners: Partner[];
  constructor() {
    this.partners = [];
    this.fillPartner();
  }
  fillPartner() {
    if (this.partners.length != 0) this.partners = [];
    partner.partner.forEach((p) => {
      const newPart = new Partner(p.source, p.alt);
      this.partners.push(newPart);
    });
  }
  addPartner(newPartner: Partner) {
    partner.partner.push(newPartner);
    this.fillPartner();
  }
  getPartners() {
    return this.partners;
  }
}
