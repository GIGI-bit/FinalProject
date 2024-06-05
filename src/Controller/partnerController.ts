import { PartnerModel } from "../Model/partnerModel";
import { PartnerView } from "../View/partnerView";
import { Partner } from "../types/partner";

export class PartnerController {
  view: PartnerView;
  model: PartnerModel;
  constructor(view: PartnerView, model: PartnerModel) {
    this.view = view;
    this.model = model;
  }

  updateView() {
    const partners = this.model.getPartners();
    this.view.displayPartner(partners);
  }
  addPartner(partner: Partner) {
    this.model.addPartner(partner);
    this.updateView();
  }
}
