export function footerDivCreator(arr: any[], divName: string) {
  const div = document.createElement("div");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");
  header.textContent = arr[0].item;
  div.classList.add("footer__" + divName + "-div");
  header.classList.add("footer__" + divName + "-header");
  ul.classList.add("footer__" + divName + "-ul");
  for (let i = 1; i < 6; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.classList.add("footer__btn");
    btn.textContent = arr[i].item;
    btn.onclick = () => {
      const product = document.querySelector(".products");
      let str: string = arr[i].item;
      str = str.replace(" ", "_");
      str = str.replace("-", "");
      str = str.toLowerCase();
      const filter = document.getElementById(str);
      product?.scrollIntoView({ behavior: "smooth" });
      filter?.click();
      console.log("insilde click :>> ", str);
    };
    li.appendChild(btn);
    ul.appendChild(li);
  }
  div.appendChild(header);
  div.appendChild(ul);
  return div;
}
