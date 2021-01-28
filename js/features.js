import data from './dataFeatures.mjs';

const wrapper=document.querySelector('.wp-features');
const template=document.getElementById('template-feature-card').content;
const fragment=document.createDocumentFragment();
console.log(data)
data.forEach(element => {
    template.querySelector('img').setAttribute("src",element.image);
    template.querySelector('h2').textContent=element.title;
    template.querySelector('p').textContent=element.description;

    let clone=document.importNode(template,true);
    fragment.appendChild(clone);
});

wrapper.appendChild(fragment);