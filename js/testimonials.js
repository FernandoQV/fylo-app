import data from "./dataTestimonials.mjs";

const wpTestimonials = document.querySelector(".testimonials");
const template1 = document.getElementById("template-testimonial-card").content;
const fragment1 = document.createDocumentFragment();
console.log(data);
data.forEach((dato) => {
  template1.querySelector('p').textContent = dato.testimonial;
  template1.querySelector('h3').textContent = dato.nombre;
  template1.querySelector('span').textContent = dato.cargo;
  template1.querySelector('img').setAttribute("src", dato.image);

  let clone1 = document.importNode(template1, true);
  fragment1.appendChild(clone1);
});

wpTestimonials.appendChild(fragment1);
